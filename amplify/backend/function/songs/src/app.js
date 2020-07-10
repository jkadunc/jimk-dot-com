/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/



const AWS = require('aws-sdk');
var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var axios = require('axios').default;

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});

var spotifyCredentials;
var spotifyToken;

async function getSpotifyCredentials(){
  const secretsClient = new AWS.SecretsManager({region:process.env.AWS_REGION});
  return new Promise((resolve, reject) => {
    secretsClient.getSecretValue({SecretId: 'spotify_api_credential'}, function(err, data){
      if (err){
        reject(err);
      }
      else {
        spotifyCredentials = JSON.parse(data.SecretString);
        resolve(spotifyCredentials);
      }
    });
  });
}

async function getSpotifyToken(){
  if (!spotifyCredentials) await getSpotifyCredentials();

    const token = await axios({
      method:'POST',
      url:'https://accounts.spotify.com/api/token',
      params: {grant_type:'client_credentials'},
      auth: {
        username: spotifyCredentials.client_id, 
        password: spotifyCredentials.client_secret
      },
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
  });

  spotifyToken = token.data;
}


/**********************
 GET methods
 **********************/
app.get('/songs/search', async function(req, res) {
  if (!spotifyToken) await getSpotifyToken();

  //TODO: need to implement token refresh
  const tracksResponse = await axios({
      method:'GET',
      url:'https://api.spotify.com/v1/search',
      params: {
        market: 'us',
        limit: 10,
        type: 'track',
        q: req.query.q
      },
      headers: {
        'Accept':'application/json',
        'Authorization': 'Bearer ' + spotifyToken.access_token
      }
  });


  if (tracksResponse.status === 200)
  {
    const responseData = [];
    const trackData = tracksResponse.data;
    trackData.tracks.items.forEach(track => {
      responseData.push( {
          uri: track.uri,
          id: track.id,
          name: track.name,
          album: track.album.name,
          artists: track.artists.map(artist => {
              return artist.name;
          })
      });
    });

    res.json(responseData);
  }
  else
  {
    res.statusCode = tracksResponse.status;
    res.send(tracksResponse);
  }
  
});


// app.get('/songs/debug', async function(req, res){
//   if (!spotifyCredentials) await getSecrets();
//   res.json({
//     id_len: spotifyCredentials.client_id.length,
//     sec_len: spotifyCredentials.client_secret.length
//   });
// });

app.get('/songs', function(req, res) {
  //TODO: scan through songs lambda & return top N songs by number of votes

  res.json({success: 'get call succeed!', url: req.url});
});


app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app

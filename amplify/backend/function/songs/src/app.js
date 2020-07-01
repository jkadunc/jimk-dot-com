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

const region = process.env.AWS_REGION; 

var spotifyCredentials;

const secretsClient = new AWS.SecretsManager({region:region});

function getSecrets(){
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


/**********************
 GET methods
 **********************/
app.get('/songs/search', async function(req, res) {
  //TODO: add integration to spotify API to search for songs
  if (!spotifyCredentials) await getSecrets();


});

app.get('/songs/debug', async function(req, res){
  if (!spotifyCredentials) await getSecrets();
  res.json({
    id_len: spotifyCredentials.client_id.length,
    sec_len: spotifyCredentials.client_secret.length
  });
});

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

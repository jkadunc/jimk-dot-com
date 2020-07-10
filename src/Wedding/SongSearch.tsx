import React from 'react';
import {API} from 'aws-amplify';


export default class SongSearch extends React.Component {

    constructor(props:any){
        super(props);
        this.state = {
            originalURL: '',
            thumbURL: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        (async () => {
            await API.get('apidfe2ef8c', '/songs/search', {});

        })();
    }

    onChange(){
        
    }

    render(){
        return (
        <input type='text' onChange={this.onChange}></input>
        );
    }
}
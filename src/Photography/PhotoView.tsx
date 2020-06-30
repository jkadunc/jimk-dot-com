import React from 'react';
import Card from 'react-bootstrap/Card';
import {photo} from '../models';
import {Storage} from 'aws-amplify';

type PhotoViewState = {
    thumbURL:string,
    originalURL:string
}

export type PhotoViewProps = {
    photo:photo
}

export default class PhotoView extends React.Component<PhotoViewProps, PhotoViewState> {

    constructor(props:any){
        super(props);
        this.state = {
            originalURL: '',
            thumbURL: ''
        };
    }
        
    async getItemURL(item:string)
    {
        return await Storage.get(item); 
    }

    componentDidMount() {
        const newState:PhotoViewState = {
            originalURL:'',
            thumbURL:''
        };
        //const promises: Promise<any>[] = [];

        if (this.props.photo.contentKeys.thumb) {
            this.getItemURL(this.props.photo.contentKeys.thumb)
            .then(result => {
                newState.thumbURL = result.toString();
                this.setState(newState);
            }
            );
        }
    }

    render(){
        return (
            <Card>
                <Card.Img src={this.state.thumbURL}></Card.Img>
                <Card.Body>
                    <Card.Title>{this.props.photo.name}</Card.Title>
                    <Card.Text>{this.props.photo.description}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

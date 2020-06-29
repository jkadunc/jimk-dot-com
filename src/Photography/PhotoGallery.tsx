import React from 'react';
import {Row, CardDeck} from 'react-bootstrap';
import Photo from './Photo';
import {Storage} from 'aws-amplify';

export type PhotoGalleryState = {
    isLoaded:boolean,
    photos:Array<string>
}

export type PhotoGalleryProps = {
    PhotosPerRow:number
}

export default class PhotoGallery extends React.Component<PhotoGalleryProps, PhotoGalleryState> {

    constructor(props:any){
        super(props);
        this.state = {
            isLoaded: false,
            photos: []
        };
    }

    handleListError(result:any){
        console.log(result);
    }

    parseListResult(items:any){
        const promises: Promise<any>[] = [];

        items.forEach((item:any) => {
            if (item.size > 0){
                promises.push(this.getItemURL(item));
            }
        });
        return Promise.all(promises);
    }
    
    async getItemURL(item:any)
    {
        return await Storage.get(item.key); 
    }

    componentDidMount() {

        const newState:PhotoGalleryState = {
            isLoaded: this.state.isLoaded,
            photos: []
        }

        Storage.list('photos/')
        .then(result => this.parseListResult(result))
        .then(results => {
            newState.photos = results;
            newState.isLoaded = true;
            this.setState(newState);
        }).catch(result => this.handleListError(result));
    }

    buildRow(photos:string[]):JSX.Element {
        const items = photos.map(item => <Photo imageTitle='Sunset' imageText='this is a good sunset' imageURL={item}/>);
        return (
            <Row>
                {items}
            </Row>
        );
    }

    render(){
        const photoCount = this.state.photos.length;
        if (this.state.isLoaded && photoCount > 0 && this.props.PhotosPerRow > 0){
            const elements: JSX.Element[] = [];
            
            for (var i = 0;  i < photoCount; i += this.props.PhotosPerRow)
            {
                const row = this.state.photos.slice(i, i+this.props.PhotosPerRow);
                elements.push(this.buildRow(row));
            }

            return (
                <CardDeck>
                {elements}
                </CardDeck>
            );
        }
        else
        {return null;}

    }
}


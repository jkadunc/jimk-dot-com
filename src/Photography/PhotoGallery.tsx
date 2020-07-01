import React from 'react';
import {Row, Col, CardDeck} from 'react-bootstrap';
import PhotoView from './PhotoView';
import {photo} from '../models'
import {API} from 'aws-amplify';
import styled from 'styled-components';

const Styling = styled.div`
    margin-top: 20px;
`

export type PhotoGalleryState = {
    isLoaded:boolean,
    photos:photo[]
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


    componentDidMount() {
        const newState:PhotoGalleryState = {
            isLoaded: this.state.isLoaded,
            photos: []
        }

        API.get("apidfe2ef8c", "/photos", {})
        .then(result => {
            newState.photos = result;
            newState.isLoaded = true;
            this.setState(newState);
        }).catch(result => this.handleListError(result));

    }

    buildRow(photos:photo[]):JSX.Element {
        const items = photos.map(item => <Col> <PhotoView photo={item} /> </Col>);
        return (
            <Row>
                {items}
            </Row>
        );
    }

    render(){
        const photoCount = this.state.photos.length;
        if (this.state.isLoaded && photoCount > 0 && this.props.PhotosPerRow > 0){
            const rows: JSX.Element[] = [];
            
            for (var i = 0;  i < photoCount; i += this.props.PhotosPerRow)
            {
                const row = this.state.photos.slice(i, i+this.props.PhotosPerRow);
                rows.push(this.buildRow(row));
            }
            //TODO: replace Card Deck w/ https://www.npmjs.com/package/react-image-gallery
            return (
                <Styling>
                    <CardDeck>
                        {rows}
                    </CardDeck>
                </Styling>
            );
        }
        else
        {return null;}
    }
}


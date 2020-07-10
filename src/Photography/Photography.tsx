import React from 'react';
import {Container} from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import siteContent from '../siteContent';

const photos = siteContent.photography.photos;

export default function Photography(){
    
    const photoData = photos.map(item => ({
        thumbnail: item.thumbUrl,
        original: item.fullSizeUrl
    }));

    return(
        <Container maxWidth='lg'>
            <ImageGallery items={photoData} />
        </Container>
    );
}
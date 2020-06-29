import React from 'react';
import Card from 'react-bootstrap/Card';

export type PhotoProps = {
    imageTitle: string,
    imageURL: string,
    imageText: string
}

export default function Photo(props:PhotoProps){
        return (
            <Card>
                <Card.Img src={props.imageURL}></Card.Img>
                <Card.Body>
                    <Card.Title>{props.imageTitle}</Card.Title>
                    <Card.Text>{props.imageText}</Card.Text>
                </Card.Body>
            </Card>
        );
}

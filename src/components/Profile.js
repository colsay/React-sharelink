import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';




const Profile = (props) => {

    return (
        <div>
            <Card>
                <div>
                    <CardImg className="photo" src={props.image} alt="Card image cap" />
                </div>
                <CardBody>
                    <CardTitle tag="h5">{props.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">React beginner</CardSubtitle>
                    <CardText>{props.number} fav links</CardText>
                    <CardText>xx shared links</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default Profile;
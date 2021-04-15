import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';
import { useSelector } from 'react-redux';

const Profile = (props) => {
    const abc = useSelector(state => state.shareLinkStore.links)
    return (
        <div>
            <Card>
                <div>
                    <CardImg className="photo" src={props.image} alt="Card image cap" />
                </div>
                <CardBody>
                    <CardTitle tag="h5">{props.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">React beginner</CardSubtitle>
                    <CardText>{`${abc.length}`} favourite links</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default Profile;
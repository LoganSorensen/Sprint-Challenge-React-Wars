import React from "react";
import {Card, CardText, CardBody, CardTitle} from "reactstrap";
import {MyCard, CardCont, MyCardTitle} from "./Styles"

// const CardBox = {
//     display: "flex",
//     justifyContent: "space-evenly",
//     flexWrap: "wrap",
    
// }

// const CardStyles = {
//     width: "25%"
// }

const CharacterCard = props => {
    return (
        <CardCont className="card-cont" key={props.id}>
            <MyCard>
                <CardBody >
                    <MyCardTitle>{props.name}</MyCardTitle>
                    <CardText>Born: {props.birth}</CardText>
                    <p>Height: {props.height}</p>
                    <p>Weight: {props.mass}</p>
                </CardBody>
            </MyCard>
        </CardCont>
    );
};

export default CharacterCard;
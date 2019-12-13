import React from "react";

const CharacterCard = props => {
    return (
        <div key={props.id}>
            <h2>{props.name}</h2>
            <p>{props.birth}</p>
            <p>{props.homeworld}</p>
        </div>
    );
};

export default CharacterCard;
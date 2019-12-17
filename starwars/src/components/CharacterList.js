import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const BigDiv = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
}

export default function CharacterList() {
    const [char, setChar] = useState([]);

    useEffect(() => {
        axios
            .get("https://swapi.co/api/people/")
            .then(response => {
                console.log(response);
                setChar(response.data.results)
            })
            .catch(error => {
                console.log("The data was not returned", error);
            });
    }, [])


    return (
        <div className="bigDiv" style={BigDiv}>
            {char.map(person => {
                return (
                    <CharacterCard
                        key={person.id}
                        name={person.name}
                        birth={person.birth_year}
                        height={person.height}
                        mass={person.mass}
                    />
                );
            })}
        </div>
    );
}
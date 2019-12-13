import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

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
        <div>
            {char.map(person => {
                return (
                    <CharacterCard
                        key={person.id}
                        name={person.name}
                        birth={person.birth_year}
                        homeworld={person.homeworld}
                    />
                );
            })}
        </div>
    );
}
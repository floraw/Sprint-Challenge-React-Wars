import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import HomeWorld from "./HomeWorld";


const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios
        .get('https://swapi.co/api/people/')
        .then(response => {
            setCharacters(response.data.results)
        })
        .catch(error => {
            console.log("These are not the droids you are looking for", error);
        })
    },[]);

    console.log(characters);

    return (
        characters.map(char => {
            return (
                <>
                    <CharacterCard
                    key={char.url}
                    name={char.name}
                    films={char.films.length}
                    homeworld={char.homeworld}
                    />
                    
            </>
            );
        })
    );

}

export default CharacterList;
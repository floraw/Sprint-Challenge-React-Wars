import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomeWorld = (props) => {
    const [homeworld, setHomeworld] = useState("");

    useEffect(() => {
        axios
        .get(props.homeworld)
        .then(response => {
            setHomeworld(response.data.name)
        })
        .catch(error => {
            console.log("These are not the droids you are looking for", error);
        })
    },[props.homeworld])

    console.log(homeworld);

    return (
        <span>{homeworld}</span>
    )

}

export default HomeWorld;
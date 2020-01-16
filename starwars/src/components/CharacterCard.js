import React from 'react';
import styled from 'styled-components';
import HomeWorld from './HomeWorld';


const CardWrapper = styled.div`
    border: solid black 1px;
    background-color: #bcd1e6;
    color: black;
    box-shadow: 5px 10px 18px #888888;
    width: 25%;
    margin-bottom: 50px;
`;

const CharacterCard = props => {
    return (
        <CardWrapper>
            <h1>{props.name}</h1>
            <p>Starring in {props.films} movies!</p>
            <p>From <HomeWorld 
                    homeworld={props.homeworld}
                    /></p>
        </CardWrapper>
    );
};

export default CharacterCard;
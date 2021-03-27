import React from "react";
import { nanoid as id } from "nanoid";

// data
import { animal } from "./CardPet/data";

// component
import CardPet from "./CardPet";

// styles
import { StyledContainer } from "./styles";

const ContainerCard = (): JSX.Element => {
    return (
        <StyledContainer>
            <h1>Cerca de ti</h1>
            {animal.map(({ genre, breed, age, type, name, imageUrl, distance, dateOfBirth }) => (
                <CardPet
                    age={age}
                    breed={breed}
                    dateOfBirth={dateOfBirth}
                    distance={distance}
                    genre={genre}
                    imageUrl={imageUrl}
                    key={id()}
                    name={name}
                    type={type}
                />
            ))}
        </StyledContainer>
    );
};

export default ContainerCard;

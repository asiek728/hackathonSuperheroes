import React from 'react'

const HeroCard = ({ hero }) => {
    return (
        <>
            <h2 style={{color: "red"}}> {hero.name} </h2>
            <img src={hero.image?.url} alt="hero-pic" />
            <h2>Hero stats:</h2>
            <p>Intelligence: {hero.powerstats.intelligence}</p>
            <p>Strength: {hero.powerstats.strength}</p>
            <p>speed: {hero.powerstats.speed}</p>
            <p>durability: {hero.powerstats.durability}</p>
            <p>power: {hero.powerstats.power}</p>
            <p>combat: {hero.powerstats.combat}</p>
        </>
    )
}

export default HeroCard

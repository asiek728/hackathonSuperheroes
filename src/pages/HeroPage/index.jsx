import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const HeroPage = () => {
    const { id } = useParams()
    const [hero, setHero] = useState({ image: {}, rating: {} })


    useEffect(() => {
        const displayShow = async () => {
            const { data } = await axios.get(`https://www.superheroapi.com/api.php/7416168271735107/${id}`)
            setHero(data)
        }
        displayShow()
    }, [])

    return (
        <>
            <h1> {hero.name} </h1>
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

export default HeroPage

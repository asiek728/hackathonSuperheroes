import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHeroes } from '../../contexts'

const RandomHero = () => {
    const [hero, setHero] = useState([])
    const [heroImage, setHeroImage] = useState("")
    const { heroes, setHeroes } = useHeroes([])


    useEffect(() => {
        displayRandomHero()
    }, [])

    const displayRandomHero = async () => {
        const randomHeroID = Math.floor(Math.random() * 731) + 1
        const { data } = await axios.get(`https://www.superheroapi.com/api.php/7416168271735107/${randomHeroID}`)

        setHero(data)
        console.log("heroData: ",  hero)
        setHeroImage(data.image.url)
        console.log(heroes);

    }

    const addHeroToLiked = () => {
        setHeroes([
            ...heroes,
            hero
           ])
        displayRandomHero();
    }

    return (
        <div>
            <button onClick={displayRandomHero}>No</button>
            <img src={heroImage} />
            <button onClick={addHeroToLiked}>Yes</button>
        </div>
    )
}

export default RandomHero

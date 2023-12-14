import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RandomHero = () => {
    const [hero, setHero] = useState("")
    const [heroImage, setHeroImage] = useState("")

    useEffect(() => {
        displayRandomHero()
    }, [])

    const displayRandomHero = async () => {
        const randomHeroID = Math.floor(Math.random() * 731) + 1
        const { data } = await axios.get(`https://www.superheroapi.com/api.php/7416168271735107/${randomHeroID}`)
        setHero(data)
        setHeroImage(data.image.url)
    }

    const addHeroToLiked = () => {
        console.log("add hero")
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

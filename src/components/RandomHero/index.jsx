import React, { useState, useEffect } from 'react'
import axios from 'axios'

const RandomHero = () => {
    const [hero, setHero] = useState("")
    const [heroImage, setHeroImage] = useState("")

    useEffect(() => {

        const randomHeroID = Math.floor(Math.random() * 731) + 1

        const displayRandomHero = async () => {
            const { data } = await axios.get(`https://www.superheroapi.com/api.php/7416168271735107/${randomHeroID}`)
            setHero(data)
            setHeroImage(data.image.url)
        }
        displayRandomHero()
    }, [])


    return (
        <div>
            <button>Yes</button>
            <img src={heroImage} />
            <button>No</button>
        </div>
    )
}

export default RandomHero

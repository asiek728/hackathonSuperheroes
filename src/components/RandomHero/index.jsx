import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHeroes } from '../../contexts'

const RandomHero = () => {
    const [hero, setHero] = useState([])
    const [heroImage, setHeroImage] = useState("")
    const { heroes, setHeroes } = useHeroes([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        displayRandomHero()
    }, [])

    const displayRandomHero = async () => {
        const randomHeroID = Math.floor(Math.random() * 731) + 1
        const { data } = await axios.get(`https://www.superheroapi.com/api.php/7416168271735107/${randomHeroID}`)
        setHero(data)
        setHeroImage(data.image.url)
        setLoading(false)
    }

    const addHeroToLiked = () => {
         const updatedHeroes = [...heroes, hero];

    // Update state with the new array of heroes
    setHeroes(updatedHeroes);

    // Store the updated array in localStorage (converted to JSON)
    // localStorage.setItem('heroes', JSON.stringify(updatedHeroes))
    
        displayRandomHero();
    }

    return (
        <div>
            <button onClick={displayRandomHero}>No</button>
            {
                loading
                    ? <p style={{ marginTop: "200px", fontSize: "60px" }}>Loading...</p>
                    : <img src={heroImage} />
            }
            <button onClick={addHeroToLiked}>Yes</button>
        </div>
    )
}

export default RandomHero

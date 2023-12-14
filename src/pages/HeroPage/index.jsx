import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { HeroCard } from "../../components"

const HeroPage = () => {
    const { id } = useParams()
    const [hero, setHero] = useState({})
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        displayHero()
    }, [])

    const displayHero = async () => {
        const { data } = await axios.get(`https://www.superheroapi.com/api.php/7416168271735107/${id}`)
        setHero(data)
        setLoading(false)
    }

    return (
        <>
            {
                loading
                    ? <p style={{ marginTop: "200px", fontSize: "80px" }}>Loading...</p>
                    : <HeroCard hero={hero} />
            }
        </>
    )
}

export default HeroPage

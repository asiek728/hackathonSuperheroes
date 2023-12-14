import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { HeroCard } from "../../components"

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
            <HeroCard hero={hero} />
        </>
    )
}

export default HeroPage

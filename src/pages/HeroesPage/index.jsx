import React from 'react'
import { useHeroes } from '../../contexts'

const HeroesPage = () => {

    const { heroes, setHeroes } = useHeroes()

    return (
        <div>HeroesPage</div>
    )
}

export default HeroesPage

import React from 'react'
import { RandomHero } from '../../components'

const HomePage = () => {
    return (
        <>
            <h1>Home Page</h1>
            <p>explanation</p>

            <div id="hero">
                <RandomHero />
            </div>
        </>
    )
}

export default HomePage

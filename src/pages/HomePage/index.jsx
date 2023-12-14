import React from 'react'
import { RandomHero } from '../../components'

const HomePage = () => {
    return (
        <>
            <h1>Home Page</h1>
            <p>explanation</p>

            <div id="hero">
                <RandomHero />
                <button>see liked heroes</button>
            </div>
        </>
    )
}

export default HomePage

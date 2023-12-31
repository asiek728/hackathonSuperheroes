import React from 'react'
import { RandomHero } from '../../components'
import Instruction from '../../components/Instruction'

const HomePage = () => {
    return (
        <>
            <div className="intro">
                <Instruction/>
            </div>

            <div id="hero">
                <RandomHero />
            </div>
        </>
    )
}

export default HomePage

import React from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'

const Instruction = () => {
    const navigate = useNavigate()
    return (
        <section className="instruction-section">
            <div className="title" onClick={() => navigate("/")}>
                <h1>Assemble</h1>
            </div>
            <div className="instruction-container">
                <div>
               
                </div>
                <div className="intro-image">
                    <img id="intro-image" src={"https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"} alt="batman" />
                         <h2>Select your superheroes </h2>
                </div>



            </div>


            <div>
                <h3>Play below!</h3>
            </div>

        </section>
    )
}

export default Instruction

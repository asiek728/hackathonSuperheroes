import React from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';

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
                <Carousel className="carousel">
                <Carousel.Item className="intro-image">
                        <img id="intro-image" src={"https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"} alt="batman" />
                       <div className="carousel-info">
                            <h4>Select your superheroes </h4> 
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h1>Go</h1>
                    </Carousel.Item>
                </Carousel>



            </div>


            <div>
                <h3>Play below!</h3>
            </div>

        </section>
    )
}

export default Instruction

import React from 'react'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';

const Instruction = () => {
    const navigate = useNavigate()
    return (
        <section className="instruction-section">
            <div  onClick={() => navigate("/")}>
             
            </div>
            <div className="instruction-container">
                <div>
               
                </div>
                <Carousel className="carousel">
                <Carousel.Item className="intro-image">
                        <img  src={"https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"} alt="batman" />
                       <div className="carousel-info">
                            <h4>Select your superheroes </h4> 
                        </div>
                    </Carousel.Item>
                    <Carousel.Item  className="intro-image">
                        <img id="heroes-image" src="/public/heroes.jpg" alt="heroes" />
                        <div className="carousel-info">
                            <h4>See all your liked sups </h4> 
                        </div>
                    </Carousel.Item>
                </Carousel>



            </div>


            <div style={{marginTop: "4em"}}>
                <h3>Play below!</h3>
            </div>

        </section>
    )
}

export default Instruction

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
                    <Carousel.Item className="intro-image">
                        <img id="" src="/public/hero-stats.jpg" alt="hero-stats" />
                          <div className="carousel-info">
                            <h4>See the stats</h4> 
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

import React, { useEffect } from 'react'
import { useHeroes } from '../../contexts'
import { useNavigate } from 'react-router-dom';
const HeroesPage = () => {
    const { heroes } = useHeroes();
    const navigate = useNavigate()

  useEffect(() => {
    console.log("heroes: ", heroes);
  }, [heroes]);

  return (
    <div>
      {heroes.map((hero) => (
        <div key={hero.id} onClick={() => navigate(`/hero/${hero.id}`)}>
              <img src={hero.image?.url} alt="hero-pic" />
              <h4>{hero.name}</h4>
        </div>
      ))}
    </div>
  );
};


export default HeroesPage

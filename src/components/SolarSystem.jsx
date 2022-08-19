import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './PlanetCard.css';

class SolarSystem extends React.Component {
  render() {
    const planets = Planets;
    return (
      <section className="planets">
        <Title headline="Planetas" />
        <div data-testid="solar-system" className="solar-system">
          {
            planets.map((element) => (
              <PlanetCard
                planetName={ element.name }
                planetImage={ element.image }
                key={ element.name }
              />
            ))
          }
        </div>
      </section>

    );
  }
}

export default SolarSystem;

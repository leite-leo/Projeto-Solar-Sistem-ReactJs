import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import './MissionCard.css';

class Missions extends React.Component {
  render() {
    const data = missions;
    return (
      <section>
        <Title headline="Missões" />
        <div data-testid="missions" className="missions">
          {
            data.map((element) => (
              <MissionCard
                name={ element.name }
                year={ element.year }
                country={ element.country }
                destination={ element.destination }
                key={ element.name }
              />
            ))
          }
        </div>
      </section>
    );
  }
}

export default Missions;

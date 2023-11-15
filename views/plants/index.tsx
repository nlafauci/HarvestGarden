import React from 'react';
import Def from '../default';

interface Plant {
  id: string;
  name: string;
  image: string;
}

interface IndexProps {
  data: {
    plants: Plant[];
  };
}

function Index({ data }: IndexProps): JSX.Element {
  const plantsFormatted = data.plants.map((plant) => (
    <div key={plant.id} className="col-md-4">
      <h2>
        <a href={`/plants/${plant.id}`}>{plant.name}</a>
      </h2>
      <img className="inGrid" src={plant.image} alt={plant.name} />
    </div>
  ));

  return (
    <Def>
      <main>
        <h1>PLANTS INDEX PAGE</h1>
        <div className="row">{plantsFormatted}</div>
      </main>
    </Def>
  );
}

export default Index;

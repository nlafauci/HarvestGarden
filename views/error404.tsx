import React from 'react';
import Def from './default';

const Error404: React.FC = () => {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find that page!</p>
      </main>
    </Def>
  );
};

export default Error404;

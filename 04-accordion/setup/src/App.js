import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {data.map(({ id, title, info }) => {
            return <SingleQuestion key={id} title={title} info={info} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;

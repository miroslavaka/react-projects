import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <SingleQuestion questions={data} />
      </div>
    </main>
  );
}

export default App;

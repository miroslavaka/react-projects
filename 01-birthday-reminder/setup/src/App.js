import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    console.log('clear all');
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List data={people} />
        <button onClick={clearAll}>clear all</button>
      </section>
    </main>
  );
}

export default App;

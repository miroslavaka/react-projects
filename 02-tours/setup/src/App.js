import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = 'https://course-api.com/react-tours-project';
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setTours(tours);
      //set loading to false, once data are loaded
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    <main>
      return <Loading />;
    </main>;
  }

  if (tours.length === 0) {
    return (
      <main>
        <div class="title">
          <h2>no tours left</h2>
          <button class="btn" onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  const removeTour = (id) => {
    console.log('tour: ', id);
    const newTours = tours.filter((item) => item.id !== id);

    setTours(newTours);
  };

  return (
    <main>
      <Tours data={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;

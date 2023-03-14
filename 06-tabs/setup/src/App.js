import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      console.log(jobs);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>

      {/* menu buttons */}
      <div className="btn-container">
        {jobs.map((job, index) => {
          return (
            <button
              className={`job-btn ${index === value ? 'active-btn' : ''}`}
              key={job.id}
              onClick={() => {
                setValue(index);
              }}
            >
              {job.company}
            </button>
          );
        })}
      </div>

      {/* job info */}
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, index) => {
          return (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{duty}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default App;

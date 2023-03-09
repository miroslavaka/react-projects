import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './index.css';

function App() {
  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="title-underline"></div>
        </div>
        <div className="btn-container">
          <button type="button" className="btn">
            All
          </button>
          <button type="button" className="btn">
            Breakfast
          </button>
          <button type="button" className="btn">
            Lunch
          </button>
          <button type="button" className="btn">
            Shakes
          </button>
        </div>
        <div className="section-center">
          {items.map((item) => {
            return (
              <article className="menu-item">
                <img className="img" src={item.img}></img>
                <div className="item-info">
                  <header>
                    <h5>{item.title}</h5>
                    <span className="item-price">$ {item.price}</span>
                  </header>
                  <p className="item-text">{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;

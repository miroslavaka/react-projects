import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './index.css';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log('allCategories: ', allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => category === item.category);
    console.log('newItems: ', newItems);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="title-underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

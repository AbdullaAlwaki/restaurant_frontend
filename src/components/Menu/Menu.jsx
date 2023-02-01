import React, { useState } from "react";
import Cards from "./Cards.jsx";
 import Categories from "./Categories";
import logo from "../../images/MERN.svg";
import "../../styles/Menu.css";


const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState([]);
  const [allFood, setAllFood] = useState([]);
 

  React.useEffect(() => {
    setCategories(['all', 'breakfast', 'lunch', 'dinner'])
    fetch(`/api/addDishes`).then((res) => {
        if (res.ok) {
            return res.json();
        }
    }).then((jsonRes) => jsonRes.dishes)
    .then((jsonRes) => {
      setMenuItems(jsonRes);
      setAllFood(jsonRes);
      return jsonRes})
    .catch((error) => console.log(error))
}, []);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(allFood);
      return;
    }
    const newItems = allFood.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <img src={logo} alt="logo" className="logo" />
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
           filterItems={filterItems}
        />

        <Cards items={menuItems} />
      </section>
    </main>
  );
};

export default Menu;
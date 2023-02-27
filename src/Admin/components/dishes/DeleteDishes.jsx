import React from "react";

function DeleteDishes() {
  const [res, setRes] = React.useState([]);


  const handleChange = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    try {
      const response = await fetch(`https://mern-restaurant-backend.onrender.com/api/Dishes/${name}`, {
        method: "DELETE",
      });
      const result = await response.json();
      setRes(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div  className="delete-vh-50">
      <h1 className="delete-dishes-h1">Delete Dishes</h1>
      {res && <h2>{res.message}</h2>}
      {res && <h2>{res.error}</h2>}
      <form action=""  className="first-form" onSubmit={handleChange} >
        <input type="text" name="name"  placeholder="Enter Dish Name" />
        <button className="buttonAddDish" >Delete</button>
      </form>
    </div>
  );
}

export default DeleteDishes;

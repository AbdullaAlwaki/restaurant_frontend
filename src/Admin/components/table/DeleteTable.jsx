import React from 'react'

export default function DeleteTable() {
    const [res, setRes] = React.useState([]);

  const handleChange = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const id = form.get("id");
    try {
      const response = await fetch(`https://mern-restaurant-backend.onrender.com/api/table/${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      setRes(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
        <h1>Delete Table</h1>
        {res && <h2>{res.message}</h2>}
        {res && <h2>{res.error}</h2>}
        <form action=""  onSubmit={handleChange} >
            <input type="text" name="id"  placeholder="Enter Table ID" />
            <button >Delete</button>
        </form>
        
    </div>
  )
}

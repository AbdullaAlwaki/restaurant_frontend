import { createContext } from "react";


const dishesF = async () => {
  const res = await fetch(
    `https://mern-restaurant-backend.onrender.com/api/Dishes`
  );
  const jsonRes = await res.json();
  const dishes = jsonRes.dishes;
  return dishes;
};

const tableF = async () => {
  const res = await fetch(
    "https://mern-restaurant-backend.onrender.com/api/table"
  );
  const jsonRes = await res.json();
  return jsonRes;
};

const contactF = async () => {
  const res = await fetch(
    "https://mern-restaurant-backend.onrender.com/api/contact"
  );
  const jsonRes = await res.json();
  return jsonRes.contact;
};


// let token=JSON.parse(localStorage.getItem("user"))
// const headersAll = {
//   headers: {
//     "Content-Type": "application/json",
    
//   },
// };

// export const fetchTest = async (endPoint, method = "Get", payload = "") => {
//   const res = await fetch({
//     url: endPoint,
//     method,
//     // headers: { ...headersAll, authorization: token && "Bearer " + token },
//     payload,
//   });
//   const jsonRes = await res.json();
//   return jsonRes;
// };

export const table = createContext(tableF());
export const dishes = createContext(dishesF());
export const contact = createContext(contactF());
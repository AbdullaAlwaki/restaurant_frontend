import React from "react";
import "../../styles/Home/Booking.css";
import axios from "../../util/axios.config"

function Booking() {
  const [response, setResponse] = React.useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const data = {
      name: form.get("name"),
      persons: form.get("person"),
      date: form.get("date"),
      time: form.get("time"),
    };
    try {
      const res = await axios.post("/api/table",data);
      setResponse(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const booking = [
    {
        type: "text",
        name: "name",
        label: "Name",
    },
    {
        type: "number",
        name: "person",
        label: "How many person?",
    },
    {
        type: "time",
        name: "time",
    },
    {
        type: "date",
        name: "date",
    },
];
  return (
        <div className="booking">
            <h2 className="headingBook">Book a table now</h2>
              <form className="formBooking" action="" method="post" onSubmit={handleSubmit}>
                  {booking.map((item, index) => (
                     <div key={index} className="floating_group">
                        <input type={item.type} name={item.name} className="inputBook" id={"inputBooking" + index} required/>
                        <label className="labelBook" htmlFor={"inputBooking" + index}>{item.label}</label> 
                      </div>
                  ))}
                {/*reservation button*/}
                <button type="submit" className="buttonBook">{localStorage.getItem("token")? "Book now":"Need to login"}</button>
              </form>
            {response && <h1>{response.message}</h1> }
            {response && <p>{response.error}</p>}
        </div>
    );
}

export default Booking;

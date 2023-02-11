import React from "react";
import { table } from "../../../help/getData";

function Table() {
  const allTable = React.useContext(table);
  const [bookTable, setBookTable] = React.useState([]);
  React.useEffect(() => {
    allTable
      .then((jsonRes) => {
        setBookTable(jsonRes);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>Book Table</h1>
      {bookTable.map((item) => {
        return (
          <div key={item._id}>
            <h3>{item.name}</h3>
            <p>{item._id}</p>
            <p>{item.persons}</p>
            <p>{item.date}</p>
            <p>{item.time}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Table;
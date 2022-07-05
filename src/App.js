import React, { useEffect, useState } from "react";
import Beers from "./Components/Beers";


function App() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((r) => r.json())
      .then((result) => {
        setBeers(result);
    
      });

  });

  // return true;
  return (
    <div className="container">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
          </tr>
        </thead>
        <tbody>
          <Beers beers={beers} />
        </tbody>
      </table>
    </div>
  );
}

export default App;

import React from "react";

export default function Beers({beers}) {
  return beers.map((beer) => {
    return (
      <tr key={beer.name}>
        <th scope="row">{beer.index}</th>
        <td>{beer.name}</td>
        <td>{beer.description}</td>
        <td>
          <img src={beer.image_url} height="200px" alt={beer.index} />
        </td>
      </tr>
    );
  });
}

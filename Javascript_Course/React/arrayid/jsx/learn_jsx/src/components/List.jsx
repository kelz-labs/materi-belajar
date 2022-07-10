import React from 'react';

function List() {
  const hewan = ['Anjing', 'Kucing', 'Sapi', 'Kerbau']; 
  return(
    <ul>{hewan.map((animal) => {
      return <li>{animal}</li>
    })}</ul>
  )
}

export default List;

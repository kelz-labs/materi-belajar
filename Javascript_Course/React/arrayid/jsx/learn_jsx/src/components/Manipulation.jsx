// belajar manipulasi DOM pada React
import React from 'react';

function Manipulation() {
  const nama = 'Andi';

  function testing() {
    console.log('tes');
    return <b>{nama}</b>;
  }

  console.log(nama);

  const judulRef = React.useRef(null);
  React.useEffect(() => {
    
    setTimeout(() => {
      judulRef.current.textContent = 'Anime lucu';
    }, 10000)
    console.log('Halo');
    console.log(judulRef);
  }, []);
  
  return(
    <>
    <h1 ref={judulRef}>Hai semua</h1>
    <h1>{testing()}</h1>
    </>
  )
};

export default Manipulation;

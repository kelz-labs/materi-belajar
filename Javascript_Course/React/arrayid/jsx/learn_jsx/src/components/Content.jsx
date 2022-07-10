// Belajar state, lifecycle
import React from 'react';

function Content() {
  const [count, setCount] = React.useState(0);
//  console.log(count);
// render

  // component did mount
  // component did update
  // init(initialization), clean up
  const [diklik, setDiklik] = React.useState(false);
  React.useEffect(() => {
    console.log('DataFetching');
  }, []);

//  React.useEffect(() => {
//    console.log(document.getElementById('judul'));
  //}, [count])
  return(
    <>
{/*<button onClick={() => {
        setCount(count - 1);
      }}>-</button>
      <span> {count} </span>
      <button onClick={() => {
        setCount(count + 1);
      }}>+</button>
      */}
      <button onClick={() => {
        setDiklik(true);
      }}>Klik disini ya</button>
      <button onClick={() => {
        setCount(count + 1);
      }}>Tambahkan</button>
      Nilai saat ini: {count}
      <h1 id='judul'>Halo, ini judul</h1>
    </>
  )
}

console.log(document.getElementById('judul'));

export default Content;

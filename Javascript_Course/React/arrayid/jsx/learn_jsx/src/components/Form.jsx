import React from 'react';

function Form() {
  const [nama, setNama] = React.useState('Anime');// kita bisa memberinya nilai default
  //const namaRef = React.useRef(null);
  function ketikaSubmit(event) {
    event.preventDefault();
  //  const nama = namaRef.current.value;
    console.log('Saya disubmit! Nama: ', nama);
  }
  return(
    <form onSubmit={ketikaSubmit}>
      <div>
      <label>Nama: </label>
      <input type='text' 
          name='nama'
          value={nama}
          onChange={(event) => {
          setNama(event.target.value);
        }}/>
      </div>
      <button>Submit</button>
    </form>
  )
}

export default Form;

import React from 'react';

function Render() {
  const [login, setLogin] = React.useState(false);
/*  if(login) {
    
    return (
      <>
      <h1>Udah login, bang</h1>
    <button onClick={() => {
  setLogin(false);
}}>Balik Kampung</button>
    </>
    )
  }*/
  return(
    <>
    {/*      <h1>Login dululah, bang</h1>
      <button onClick={() => {
        setLogin(true);
      }}>Login</button>*/}
      <h1>Aplikasi</h1>
      <p>{login && <strong>Kamu sudah Login</strong>}</p>
      <button onClick={() => {
      setLogin(true);
    }}>Anime</button>
    </>
  )
}

export default Render;

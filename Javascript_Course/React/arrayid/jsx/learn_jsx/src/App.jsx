import React from 'react';
// import Content from './components/Content';
//  mport Render from './components/Render';
import Manipulation from './components/Manipulation';
// import Section from './components/Section';
import List from './components/List';
import Form from './components/Form';
import Fetch from './components/Fetch';

function App() {
  const body = document.querySelector('body');
  const name = 'Haikel';
  const li = 'Lu anime ya banh';
  const li2 = 'Gw? Lu aja kali';
  const li3 = 'Jangan tanya saya';

  function list(nama) {
    return <li>'Halo gais,' <strong>{nama}</strong> disini</li>
  }

  return(
    <>
{/*<div>
        <h1>Hai, saya {name}</h1>
        <img src="https://avatars.githubusercontent.com/u/77146709?v=4" width="200px" />
        <ul>
          <li>{li}</li>
          <li>{li2}</li>
          <li>{li3}</li>
          <li>'Halo gais,' <strong>'Yuuki'</strong> disini</li>
          {list('Haikel')}
          <h2>{new Date().toLocaleTimeString()}</h2>
        </ul>
        {/*Contoh penggunaan inline style di react}
        <div style={{
          width: '200px',
          height: '200px',
          backgroundColor: '#2e3440'
        }}><p>Testing kubus</p></div>
        <Content />
        <Render />
        {/*Event handling di react}
        <button onClick={() => {
          body.style.backgroundColor="#2e3440";
        }}>
          Klik saya
        </button>
      </div>
      <Render />
  */}
      <Manipulation />
      <List />
      <Form />
      <Fetch />
    </>
  )
}

export default App;

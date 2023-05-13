import Board from './components/board'
import { useState } from 'react';
import './style.scss'

function App() {

  useState()

  let counter =1;
  const onBtnClick = () =>{
    console.log('hello');
    counter = counter +1;
  };

  return (
    <div className='app'>
      <div>
        <button onClick={onBtnClick}>
          Click me please
        </button>
        <div>{counter}</div>
      </div>
    </div>
  );
}

export default App

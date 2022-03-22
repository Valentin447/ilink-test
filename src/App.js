import React, { useState, useRef } from 'react';
import './styles/App.css';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';


function App() {
  const [button, setButton] = useState('');
  const [body, setBody] = useState('');


  return (
    <div className='App'>
      <MyButton classMod="button_1" disabled='disabled'>BUTTON</MyButton>
      <MyButton classMod="button_2">BUTTON</MyButton>
      <MyButton classMod="button_icon">BUTTON</MyButton>
      <form>
        <MyInput value={body} onChange={e => setBody(e.target.value)} type="text" placeholder="Placeholder" label="Input"/>
        <MyInput value={body} onChange={e => setBody(e.target.value)} type="text" placeholder="Placeholder" label="Input" disabled/>
        <MyInput value={body} onChange={e => setBody(e.target.value)} type="text" placeholder="Placeholder" label="Input"/>
      </form>
    </div>
  );
}

export default App;

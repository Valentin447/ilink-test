import React, { useState, useRef } from 'react';
import './styles/App.css';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import Multilineinput from './components/UI/multiline-input/MultilineInput';


function App() {
  const [button, setButton] = useState('');

  return (
    <div className='App'>
      <MyButton classMod="button_1" disabled='disabled'>BUTTON</MyButton>
      <MyButton classMod="button_2">BUTTON</MyButton>
      <MyButton classMod="button_icon">BUTTON</MyButton>
      <form>
        <MyInput classmod="myInput_mod_error" type="text" placeholder="Placeholder" label="Input" error="Error" counter={'0/200'}/>
        <Multilineinput classmod="" type="text"  placeholder="Placeholder" label="Input"/>
        <MyInput classmod="" type="text" placeholder="Placeholder" label="Input"/>
      </form>
    </div>
  );
}

export default App;

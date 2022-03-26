import React, { useState, useRef } from 'react';
import './styles/App.css';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import Multilineinput from './components/UI/multiline-input/MultilineInput';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Comment from './components/Comment/Comment';
import Slider from './components/Slider/Slider';
import Presentation from './components/Presentation/Presentation';
import backgroundImg from './static/icons/vector.svg';
import Form from './components/Form/Form';
import Flashmessage from './components/FlashMessage/FlashMessage';
import { Context } from './context';


function App() {
  const [displayForm, setDisplayForm] = useState('none');
  const [filterBlur, setFilterBlur] = useState('none');
  const [displayBlackout, setDisplayBlackout] = useState('none');

  return (
    <div className='App'>
      <Context.Provider value={{ displayForm, setDisplayForm }}>
        <Form setFilterBlur={setFilterBlur} setDisplayBlackout={setDisplayBlackout}/>
        <div className='blackout' style={{display: displayBlackout}}></div>
        <div className='blur' style={{filter: filterBlur}}>
          <img className='background-img' src={backgroundImg} alt='' />
          <Header name="Валентин Михайлов" />
          <Presentation />
          <Slider setFilterBlur={setFilterBlur} setDisplayBlackout={setDisplayBlackout}/>
          <Footer />
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;

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


function App() {
  const [button, setButton] = useState('');

  return (
    <div className='App'>
      {/* <Form /> */}
      <div className='blackout'></div>
      <div className='blur'>
        {/* <Flashmessage classMod='flash-message-success-mob'/> */}
        <img className='background-img' src={backgroundImg} alt='' />

        <Header name="Яна Валиева" />
        <Presentation />
        <Slider />

        {/* <Comment userName="Буба Бубенцов" avatar={avatarUser4} date='08.01.2022'>Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.</Comment>
        <MyButton classMod="button_1" disabled='disabled'>BUTTON</MyButton>
        <MyButton classMod="button_2">BUTTON</MyButton>
        <MyButton classMod="button_icon">BUTTON</MyButton>
        <form>
          <MyInput classmod="myInput_mod_error" type="text" placeholder="Placeholder" label="Input" error="Error" counter={'0/200'}/>
          <Multilineinput classmod="" type="text"  placeholder="Placeholder" label="Input"/>
          <MyInput classmod="" type="text" placeholder="Placeholder" label="Input"/>
        </form> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;

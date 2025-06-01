import React, { useState } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Form } from './components/Form';

const App = () => {

  const [start, setStart] = useState(false);

  const changeHandler = () => {
      setStart(prev => !prev);
  }

  return (
    <>
      <Header />
      { !start && <Home onChange={changeHandler} /> }
      { start && <Form /> }
    </>
  )
}

export default App;
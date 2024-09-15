import { useState } from 'react';
import './App.css';
import Form from './components/forms/Form';

function App() {

  const [value , setValue] = useState([])

  const data = (a) => {
    setValue((prevState) => {
      return[...prevState , a]
    })
  }

  return (
    <div className="App">
        <Form data = {data} />
        {value.map((item) => {
          return(
            <div className='mother'>
              <h1>{item.text}</h1>
              <h1>{item.number}</h1>
              <h1>{item.img}</h1>

            </div>
          )
        })}
    </div>
  );
}

export default App;

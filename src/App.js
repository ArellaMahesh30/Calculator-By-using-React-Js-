import Keypad from './Keypad';
import './App.css';

import {useState} from 'react'
function App() { 

let [input, setinput] = useState('')

function handleClick(value) {

  setinput(input+value)
}

function calculate(value){
  let outputValue = eval(input)

  setinput(outputValue)

}


function handleClear() {
  setinput('')
}


  return(
  <div className='container'>
    <h1>Calculator </h1>
    <div>
      <input type='text' className='input' value={input}/>
          <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate}/>
    </div>
  </div>
  )
}

export default App;
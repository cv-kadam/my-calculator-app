import React, { useState } from 'react';
import './App.css';

export default function Nage() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handler = e => {
    const inputValue = e.target.value;
    setInput(inputValue);
    setResult(inputValue);
  }

  const handleOperation = operation => {
    setInput(input + operation);
  }

  const handleClear = () => {
    setInput('');
    setResult('');
  }

  return (
    <div className='background-gradient'>
      <div className='newdiv'>
        <div className='con'>
          <div className='input-container'>
            <input 
              type='text' 
              className='inputval' 
              value={input} 
              name='input' 
              onChange={handler}
              placeholder="Expression Here:" 
            />
            <div className='res'>
              {result}
            </div>
          </div>
          
          <div className='btncon'>
            <div className='num'>
              <div className='num1'>
                <button className='btns' id='bt9' onClick={() => setInput(input + '9')}>9</button>
                <button className='btns' id='bt8' onClick={() => setInput(input + '8')}>8</button>
                <button className='btns' id='bt7' onClick={() => setInput(input + '7')}>7</button>
              </div>
              <div className='num1'>
                <button className='btns' id='bt6' onClick={() => setInput(input + '6')}>6</button>
                <button className='btns' id='bt5' onClick={() => setInput(input + '5')}>5</button>
                <button className='btns' id='bt4' onClick={() => setInput(input + '4')}>4</button>
              </div>
              <div className='num1'>
                <button className='btns' id='bt3' onClick={() => setInput(input + '3')}>3</button>
                <button className='btns' id='bt2' onClick={() => setInput(input + '2')}>2</button>
                <button className='btns' id='bt1' onClick={() => setInput(input + '1')}>1</button>
              </div>
              <div className='num1'>
                <button className='btns' id='bt0' onClick={() => setInput(input + '0')}>0</button>
                <button className='btns' id='bt.' onClick={() => setInput(input + '.')}>&#183;</button>
                <button className='btns' id='bt=' onClick={() => setResult(eval(input))}>=</button>
              </div>
            </div>

            <div className='exp'>
              <button className='btns' id='btb' onClick={handleClear}>Clear</button>
              <button className='btns' id='btd' onClick={() => handleOperation('/')}>/</button>
              <button className='btns' id='bt*' onClick={() => handleOperation('*')}>&times;</button>
              <button className='btns' id='bt-' onClick={() => handleOperation('-')}>-</button>
              <button className='btns' id='bt+' onClick={() => handleOperation('+')}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

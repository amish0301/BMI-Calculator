import React, { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmiValue, setBmiValue] = useState('');
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();

    if(weight > 0 && height > 0) {
      const res = (weight / Math.floor((height * height) / 10000)).toFixed(2);
      if(res === 'NaN') setBmiValue('height or weight value cannot be 0');
      else setBmiValue(res);

      // message logic
      if (bmiValue > 0 && bmiValue < 25) {
        setMessage('You are UnderWeight');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setMessage('You are Healthy Weight');
      } else {
        setMessage('You are OverWeight');
      }
    }else {
      alert('Please fill all the details properly');
    }
  }

  const reload = () => {
    setHeight()
    setWeight();
    setBmiValue('');
    window.location.reload();
  }

  return (
    <div className='app'>
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calculateBMI}>
          <div>
            <label>Weight (in KG)</label>
            <input type="text" placeholder='Enter Weight Value' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (in cm) </label>
            <input type="text" placeholder='Enter Height Value' value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
          </div>
          <div className="msgBox">
            <h3>Your BMI : {bmiValue}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
import { useState } from 'react'
import './App.css'

function App() {

  const [yearInput, setYearInput] = useState("");
  const [age, setAge] = useState(0);

  function calculateAge(e) {
    e.preventDefault();
    const birthYear = parseInt(yearInput);
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;
    setAge(calculatedAge);
  }

  return (
      <div className="container">
        <h2>How old am I?</h2>
        <div className="form-box">
          <form onSubmit={calculateAge}>
            <label>Name</label>
            <input
              type="text"
              placeholder='Type your name'
              required
            />

            <label>In which year were you born?</label>
            <input
              type="text"
              value={yearInput}
              placeholder='Type the year you were born'
              onChange={(e) => setYearInput(e.target.value)}
              required
            />

          <input
            className="button-blue"
            type="submit"
            value="Generate"
          />
          </form>
        </div>
        {age !== 0 && (
          <p className="calculated-age">Your age is: {age} years old</p>
        )}
      </div>
  )
}

export default App

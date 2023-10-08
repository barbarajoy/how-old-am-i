import { useState } from 'react'
import './App.css'

function App() {


  return (
      <div class="container">
        <h2>How old am I?</h2>
        <div className="form-box">
          <form action="">
            <label>Name</label>
            <input
              type="text"
              placeholder='Type your name'
              required
            />

            <label>In which year were you born?</label>
            <input
              type="text"
              placeholder='Type the year you were born'
              required
            />

          <input
            className="button-blue"
            type="submit"
            value="Generate"
          />
          </form>




        </div>
      </div>
  )
}

export default App

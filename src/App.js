import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alert from './components/Alert'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743  '
      // document.body.style.color = 'white' 
      showAlert("Dark Mode is enabled!!", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      // document.body.style.color = 'black' 
      showAlert("Light Mode is enabled!!", "success")
    }
  }

  return (
    <Router>
      <div>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/home' element={<Textform heading="Enter to text the analyze" mode={mode} showAlert={showAlert} />} />
          <Route path='/about' element={<About mode={mode}/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

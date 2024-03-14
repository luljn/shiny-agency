import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from './utils/context'


const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
    <ThemeProvider>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/survey/:questionNumber' element={<Survey />}/>
        <Route path='/results' element={<Results />}/>
        <Route path='freelances' element={<Freelances />}/>
        {/* To redirect to an error page, 
        if the specified url does not exist  */}
        <Route path='*' element={<Error />}/>
      </Routes>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)

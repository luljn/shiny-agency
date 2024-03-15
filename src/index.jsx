import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'
import { SurveyProvider, ThemeProvider } from './utils/context'
import GlobalStyle from './utils/style/GlobalStyle'
import Footer from './components/Footer'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
    <ThemeProvider>
      <SurveyProvider>
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
        <Footer />
      </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
)

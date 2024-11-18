import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewsPage from './components/NewsPage/NewsPage'
import HomePage from './components/HomePage/HomePage'
import LoginPage from './components/LoginPage/LoginPage'
import AboutPage from './components/AboutPage/AboutPage'
import CountCaloriesPage from './components/CountCaloriesPage/CountCaloriesPage'
import RegistrationPage from './components/RegistrationPage/RegistrationPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/news' element={<NewsPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/count_calories' element={<CountCaloriesPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signin' element={<RegistrationPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import './scss/styles.scss';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemList />} />
        <Route path='/item/:id' element={<ItemDetail />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
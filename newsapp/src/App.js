import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News pageSize="15" country="us" category="general" />} />
            <Route exact path='/business' element={<News pageSize="15" country="us" category="business" />} />
            <Route exact path='/entertainment' element={<News pageSize="15" country="us" category="entertainment" />} />
            <Route exact path='/health' element={<News pageSize="15" country="us" category="health" />} />
            <Route exact path='/science' element={<News pageSize="15" country="us" category="science" />} />
            <Route exact path='/sports' element={<News pageSize="15" country="us" category="sports" />} />
            <Route exact path='/technology' element={<News pageSize="15" country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

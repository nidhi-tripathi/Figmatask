// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Implement search logic here if needed
  };

  return (
    <div className="app">
      <Sidebar onSearch={handleSearch} />
      <MainContent />
    </div>
  );
};

export default App;

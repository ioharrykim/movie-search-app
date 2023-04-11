// App.tsx
import React from 'react';
import './App.css';
import MovieSearch from './MovieSearch';

function App() {
  return (
    <div className="App">
      <h1>영화 검색 서비스</h1>
      <MovieSearch />
    </div>
  );
}

export default App;

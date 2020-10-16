import React from 'react';
import Header from './components/Header/Header';
import BookSearchBar from './components/BookSearchBar/BookSearchBar';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <BookSearchBar />
    </div>
  );
}

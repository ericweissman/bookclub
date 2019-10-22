import React, { Component } from 'react';
import './App.css';
import { books } from './list.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      books
    }
  }

  random = () => {
    return this.state.books.filter(book => !book.read).splice(0, 3);
  }


  render() {
    return (
      <div className="App">
        
      </div>
    )
  }
}

export default App;

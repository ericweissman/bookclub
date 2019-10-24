import React, { Component } from 'react';
import '../App/App.css';
import BookArea from '../BookArea/BookArea.js'
import { books } from '../list.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      books
    }
  }

  removeBook = (id) => {
    const books = this.state.books.filter(book => book.id !== id);
    this.setState({books})
  }

  render() {
    const unread = this.state.books.filter(book => !book.read);
    return (
      <div className="App">
        <h1>bookclub.</h1>
        <BookArea
          books={unread}
          remove={this.removeBook}
        />
      </div>
    )
  }
}

export default App;

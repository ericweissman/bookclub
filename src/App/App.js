import React, { useState, useEffect } from 'react';
import '../App/App.css';
import BookArea from '../BookArea/BookArea.js'
import { allBooks } from '../list.js'

const App = () => {
  const [books, setBooks] = useState(allBooks)

  const removeBook = (id) => {
    const cleanedBooks = books.filter(book => book.id !== id);
    setBooks(cleanedBooks);
  }

  const unread = books.filter(book => !book.read);


  return (
    <div className="App">
      <h1>bookclub.</h1>
      <BookArea
        books={unread}
        remove={removeBook}
      />
    </div>
  )
}

export default App;

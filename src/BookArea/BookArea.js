import React from 'react';
import Card from '../Card/Card.js';
import './BookArea.scss'

function BookArea({books, remove}) {
  const bookCards = books.splice(0, 3).map(book => <Card key={book.id}
    {...book} remove={remove}/>)
  return (
    <section>
      {bookCards}
    </section>
  )
}


//add book button
//when clicked, a new book card is added to BookArea
//

export default BookArea;

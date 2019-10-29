import React, { useState } from 'react';
import '../Card/Card.scss'
import Info from '../Info/Info.js'

const Card = (props) => {
  const [showDesc, setShowDesc] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const {title, author, description, id, pages, published, stars, short_desc, remove, img} = props;

  const handleChange = (event) => {
    const { name } = event.target
    if (name === 'showDesc') {
      showDesc(!showDesc)
    } else {
      setShowInfo(!showInfo)
    }
  };

  const style = {
    backgroundImage: `url(${img})`
  }

  return (
    <div key={id} className="book-card" style={style}>
      <div>
        <button name="showInfo" onClick={(event) => handleChange(event)}>Show Info</button>
        <button onClick={() => remove(id)}>BOO!</button>
      </div>

      <Info
        {...props}
        handleChange={handleChange}
        showInfo={showInfo}
      />
    </div>
    )
  }


export default Card;

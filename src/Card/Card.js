import React, { useState } from 'react';
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

  const cardStyle = {
    backgroundImage: `url(${img})`,
    backgroundColor: 'black',
    opactiy: '0.4'
  }

  const removeBtnStyle = {
    height: '35px',
    width: '35px',
    backgroundImage: `url('../../../assets/icon.svg')`,
    cursor: 'pointer'
  }

  const showInfoStyle = {
    height: '35px',
    width: '35px',
    backgroundImage: `url('../../../assets/info.svg')`,
    cursor: 'pointer',
  }



  return (
    <div key={id} className="book-card" style={cardStyle}>
      <Info
        {...props}
        handleChange={handleChange}
        showInfo={showInfo}
      />
      <div className="buttons">
        <div style={showInfoStyle} name="showInfo" onClick={(event) => handleChange(event)}></div>
        <div  style={removeBtnStyle} onClick={() => remove(id)}></div>
      </div>
    </div>
    )
  }


export default Card;

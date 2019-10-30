import React, { useState } from 'react';
import Info from '../Info/Info.js'

const Card = (props) => {
  const [showDesc, setShowDesc] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const {id, remove} = props;

  const handleChange = (event) => {
    const { name } = event.target
    if (name === 'showDesc') {
      showDesc(!showDesc)
    } else {
      setShowInfo(!showInfo)
    }
  };

  const cardStyle = {
    backgroundImage: `url(../../../photos/${id}.jpeg)`,
    opactiy: '0.4'
  }

  const removeBtnStyle = {
    height: '35px',
    width: '35px',
    backgroundImage: `url('../../../icons/icon.svg')`,
    cursor: 'pointer'
  }

  const showInfoStyle = {
    height: '35px',
    width: '35px',
    backgroundImage: `url('../../../icons/info.svg')`,
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

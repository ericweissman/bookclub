import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => {
  const {title, author, description, id, pages, published, stars, short_desc, remove, img, showInfo, handleChange} = props;
  return ReactDOM.createPortal(
    <div className={showInfo ? 'modal' : 'hidden'}>
      <div className="info">
        <h3>{title}</h3>
        <h4>by {author}</h4>
        <div className="basic-info">
          <p>{pages} pages</p>
          <p>published {published}</p>
          <p>{stars} stars</p>
        </div>
        <div className="descriptions">
          <p>{short_desc}</p>
          <p>{description}</p>
        </div>
        <button name="showInfo" onClick={(event) => handleChange(event)}>Go Back</button>
      </div>
    </div>,
    document.getElementById('portal-root')
  )
}


export default Info;

import React, { Component } from 'react';
import '../Card/Card.css'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      showDesc: false,
    }
  }

  handleChange = (event) => {
    const { name } = event.target
    this.setState({
      [name]: !this.state[name]
    })
  };

render() {
  const {title, author, description, id, pages, published, stars, short_desc} = this.props;
  const {showInfo, showDesc} = this.state;
  return (
    <div key={id}>
      <h3>{title}</h3>
      <h4>by {author}</h4>
      <div className="basic-info">
        <button name="showInfo" onClick={(event) => this.handleChange(event)}>Show Info</button>
        <div className={ showInfo ? '' : 'hidden'}>
          <p>{pages} pages</p>
          <p>published {published}</p>
          <p>{stars} stars</p>
        </div>
      </div>
      <div className="descriptions">
        <button name="showDesc" onClick={(event) => this.handleChange(event)}>Show Descriptions</button>
        <div className={ showDesc ? '' : 'hidden' }>
        <p>{short_desc}</p>
        <p>{description}</p>
        </div>
      </div>
    </div>
    )
  }
}


export default Card;

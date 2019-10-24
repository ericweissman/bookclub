import React, { Component } from 'react';
import '../Card/Card.scss'
import Info from '../Info/Info.js'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      showDesc: false,
      showInfo: false,
    }
  }

  handleChange = (event) => {
    const { name } = event.target
    this.setState({
      [name]: !this.state[name]
    });
  };

render() {
  const {title, author, description, id, pages, published, stars, short_desc, remove, img} = this.props;
  const {showInfo, showDesc} = this.state;
  const style = {
    backgroundImage: `url(${img})`
  }
  return (
    <div key={id} className="book-card" style={style}>
      <div>
        <button name="showInfo" onClick={(event) => this.handleChange(event)}>Show Info</button>
        <button onClick={() => remove(id)}>BOO!</button>
      </div>

      <Info
        {...this.props}
        handleChange={this.handleChange}
        showInfo={showInfo}
      />
    </div>
    )
  }
}


export default Card;

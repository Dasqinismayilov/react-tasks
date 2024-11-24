import React, { Component } from 'react';  
import './Wine.css';

export default class Wine extends Component {
  render() {
    const { title, description, rating } = this.props;
    return (
      <>
        <div className='wines'>
          <h1>{ title }</h1>
          <h4>{ description }</h4>
          <p>{ rating }</p>
        </div>
      </>
    );
  }
}
import { Component } from "react";

class Title extends Component {
  name = "a";

  clickHandler = (event) => {
    console.log(this.name);
    console.log(event.target);
  }

  render() {
    const { title, rating } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <span>{rating}</span>
        <hr />
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default Title;
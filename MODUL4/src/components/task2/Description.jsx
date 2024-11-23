import { Component } from "react";
import Title from "../Title";

export default class Description extends Component {
  render() {
    return (
      <div>
        <h1>This is description title!</h1>
        <span>7</span>
        <Title title="P title" rating={7} />
      </div>
    );
  }
}
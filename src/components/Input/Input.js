import React, { Component } from "react";
import Button from "../Button/Button";
import style from "./input.module.css";

class input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Status: "",
    };
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log("terpanggil");
  };
  render() {
    return (
      <div>
        <form>
          <input
            className={style.input}
            type={this.props.type}
            name={this.props.name}
            id={this.props.id}
            value={this.props.value}
            placeholder={this.props.placeholder}
          />
          <Button />
        </form>
      </div>
    );
  }
}

export default input;

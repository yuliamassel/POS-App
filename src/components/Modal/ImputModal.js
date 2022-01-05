import React, { Component } from "react";
import style from './Modal.module.css'

export class Modal extends Component {
  render() {
    return (
      <>
        <div>
          <form>
            <input
              className={style.modal}
              type={this.props.type}
              name={this.props.name}
              id={this.props.id}
              value={this.props.value}
              onChange={this.props.onChange}
            />
          </form>
        </div>
      </>
    );
  }
}

export default Modal;

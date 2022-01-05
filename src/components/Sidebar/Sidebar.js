import React, { Component } from "react";
import style from "./Side.module.css";
import Modal from "react-modal";
import Input from "../Modal/ImputModal";

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      food: "",
      image: "",
      price: "",
      category: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addFood(this.state.food)
    this.setState({
      food: ""
    });
  };

  componentWillUnmount() {
    Modal.setAppElement("body");
  }

  modalClick = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    return (
      <>
        <div className={style.sidebar}>
          <Modal
            isOpen={this.state.isActive}
            onRequestClose={this.modalClick}
            style={{
              overlay: {
                width: 800,
                height: 600,
                marginLeft: 200,
                marginTop: 20,
                backgroundColor: "none",
              },
              content: {
                //   color: 'red'
              },
            }}
          >
            <h3 className="mb-5">Add Item</h3>
            <form onSubmit={this.handleSubmit}>
              <h4 className="mt-5">
                Name <Input type="text" name="food" id="food" value={this.state.food} onChange={this.handleChange} />
              </h4>{" "}
            </form>
            <form>
              <h4 className="mt-1">
                Image <Input type="url" name="image" id="link"/>
              </h4>
            </form>
            <form>
              <h4>
                Price <Input type="number" name="price" id="price" />
              </h4>
            </form>
            <form>
              {" "}
              <h4>
                Category
                <Input type="text" name="food" id="food" />
              </h4>
            </form>

            <button className={style.btnCancel} onClick={this.modalClick}>
              {" "}
              Cancel
            </button>
            <button type="submit" className={style.btnAdd}>Add</button>
          </Modal>
          <button className={style.btnSatu}></button>
          <button className={style.btnDua}></button>
          <button onClick={this.modalClick} className={style.btnTiga}></button>
        </div>
      </>
    );
  }
}

export default Sidebar;

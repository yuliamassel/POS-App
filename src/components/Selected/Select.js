import React, { Component } from "react";
import Modal from "react-modal";
import { Col, ListGroup, Row } from "react-bootstrap";
import style from "./select.module.css";
import {numberWithCommas} from '../utils/utils';

class Select extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }

  componentWillUnmount() {
    Modal.setAppElement("body");
  }

  modalClick = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    const { keranjangs } = this.props;
    // console.log(keranjangs);
    return (
      <>
        <div className={style.select}>
          <div className={style.cart}>
            <h5 className="position-absolute top-0 start-50 translate-middle-x mt-3 ">
              Cart
            </h5>
          </div>
          <Modal
            isOpen={this.state.isActive}
            onRequestClose={this.modalClick}
            style={{
              overlay: {
                width: 650,
                height: 650,
                marginLeft: 200,
                marginTop: 5,
                backgroundColor: "none",
                overflowX: "hidden",
              },
              content: {
                //   color: 'red'
              },
            }}
          >
            <h4>Checkout</h4>
            <p>Cashier : Pevita Pearce</p>
            <p>Payment :</p>
            <button className={style.btnPrint} onClick={this.modalClick}>
              Print
            </button>
            <button className={style.btnSend} onClick={this.modalClick}>
              Send Email
            </button>
            <h5 className={style.text}>Or</h5>
          </Modal>
          <Col>
            {keranjangs && (
              <ListGroup variant="flush">
                {keranjangs.map((cartMenu) => (
                  <ListGroup.Item>
                    <Row>
                      <Col>{cartMenu.products.image}</Col>
                      <Col>
                        <h5>{cartMenu.products.name}</h5>
                        <div className={style.increment}>
                        <button className={style.btn}>-</button>
                        <div className={style.num}>{cartMenu.amount}</div>
                        <button className={style.btn}>+</button>
                        </div>
                      </Col>
                      <Col>
                        Rp. {numberWithCommas(cartMenu.total_price)}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>
          <button onClick={this.modalClick} className={style.btnChekout}>
            {" "}
            Chekout
          </button>
          <button className={style.btnCancel}> Cancel</button>
        </div>
      </>
    );
  }
}

export default Select;

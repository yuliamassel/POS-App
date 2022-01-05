import React, { Component } from "react";
import { Col, } from "react-bootstrap";

class Cart extends Component {
  // constructor(props) {
  //     super(props)

  //     this.state = {
  //          kerajangs: []
  //     }
  // }

  render() {
    const { keranjangs } = this.props;
    return (
      <div>
        <Col>
          {keranjangs.length !== 0 &&(
              <div></div>
          )}
          {/* <div class="units">
            <div class="btn-minus">-</div>
            <div class="number"></div>
            <div class="btn-plus">+</div>           
        </div>
        <p></p> */}
        </Col>
      </div>
    );
  }
}

export default Cart;

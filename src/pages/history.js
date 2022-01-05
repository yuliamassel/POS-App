import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
// import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import style from "./pages.module.css";


class history extends Component {
  render() {
    return (
      <>
        <div className={style.history}>
          <Navbar className=" shadow" bg="white">
            <Container>
              <Navbar.Brand ><p className={style.text}>History</p></Navbar.Brand>
            </Container>
          </Navbar>
          <Sidebar />
        </div>
      </>
    );
  }
}

export default history;

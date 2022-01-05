import React, { Component } from "react";
import Menu from "../components/Menu/Menu";
import Navbar from "../components/Navbar/Navbar";
import Select from "../components/Selected/Select";
import Sidebar from "../components/Sidebar/Sidebar";
import style from "./pages.module.css";

class home extends Component {
  render() {
    return (
      <>
        <div className={style.home}>
          <Navbar />
            
          <Sidebar />

          <Menu/>


          <Select />
        </div>
      </>
    );
  }
}

export default home;

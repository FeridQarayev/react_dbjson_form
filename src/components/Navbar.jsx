import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import "./Navbar.css";
import img from "../image/images-1.webp";

function Navbar() {
  return (
    <Fragment>
      <div className="navbar">
        <div className="container">
          <div>
            <Breadcrumbs aria-label="breadcrumb">
              <Link color="inherit" to="/">
                Home
              </Link>
              <Link color="inherit" to="/add">
                Add
              </Link>
            </Breadcrumbs>
          </div>
          <div className="right">
            My Photo
            <img src={img} alt="MyPhoto" />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;

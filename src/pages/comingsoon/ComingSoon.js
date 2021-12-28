import React, { Component } from "react";
import Header from "../../components/header/Header";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./ComingSoon.css";
import { Link } from "react-router-dom";

export default class ComingSoon extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="comingsoon-main">
        <Header theme={this.props.theme} />
        <div className="comingsoon-class">
          <Fade bottom duration={2000} distance="40px">
            <h1>under development</h1>
            <h1 className="comingsoon-dark">Dark Mode Coming Soon...</h1>
            <Link
              className="main-button"
              to="/home"
              style={{
                color: theme.body,
                backgroundColor: theme.text,
                border: `solid 1px ${theme.text}`,
                display: "inline-flex",
              }}
            >
              Go Home
            </Link>
          </Fade>
        </div>
        {/* <Footer theme={this.props.theme} /> */}
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

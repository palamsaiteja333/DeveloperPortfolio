import React from "react";
import "./Greeting.css";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                ( {greeting.nickname} )
              </h2>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="saad sitting on table"
              src={require("../../assests/images/Sai_Teja_Programmer.png")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}

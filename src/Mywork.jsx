import React from "react";
import "./Mywork.css";
import theme from "./theme_pattern.svg";
import mywork_data from "./mywork_data";

const Mywork = () => {
  return (
    <div className="mywork" id="mywork">
      <div className="mywork-title">
        <h1>My latest Work</h1>
        <img src={theme} alt="" />
      </div>
      <div className="mywork-contener">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="contain">
              <img className="my-work-img" src={work.w_img} alt="this the image of project" />
              <p>{work.w_no}</p>

            </div>
          );
        })}
      </div>
      <div className="show-more">
        <p>Show More ➡️</p>
      </div>
    </div>
  );
};

export default Mywork;

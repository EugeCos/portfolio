import React from "react";
import "./Bio.less";

const Bio = () => {
  return (
    <div className="bio-container">
      <img
        src={
          window.location.pathname === "/about"
            ? "/img/headshot_mustachio.jpg"
            : "/img/headshot.jpg"
        }
        alt="headshot"
        className="profile-headshot"
      />
      <h2>EUGENE COSTOV</h2>
      <h3>Full Stack Web Developer</h3>
    </div>
  );
};

export default Bio;

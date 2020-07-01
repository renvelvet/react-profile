import React from "react";
import "./BarProfile.css";
import avatar from "../../assets/ava2.jpg";
function BarProfile() {
  return (
    <div className="bar-profile">
      <div className="block-ava">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="block-data">
        <h3>RESHA PUSPITA DEWI</h3>
        <h4>BOOTCAMP STUDENT</h4>
        <h4>
          "<em>Motto ceritanya</em>"
        </h4>
      </div>
    </div>
  );
}

export default BarProfile;

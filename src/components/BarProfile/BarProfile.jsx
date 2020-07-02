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
        <p>
          "
          <em>
            Ngoding itu seru. Kalau Lo gak nikmatin ngoding, kemungkinannya cuma
            1. Lo belajar di momen dan media yang kurang tepat!
          </em>
          "
        </p>
      </div>
    </div>
  );
}

export default BarProfile;

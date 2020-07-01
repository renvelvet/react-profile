import React, { useState } from "react";
import "./Profile.css";
import BarProfile from "../components/BarProfile/BarProfile";
import CardCourse from "../components/CardCourse/CardCourse";
function Profile() {
  // https://www.youtube.com/embed/U0HWTWAi0G0
  // https://www.youtube.com/embed/uau6k1wp1us

  const [cardContent] = useState([
    {
      title: "Node.js Express Tutorial",
      video: "https://www.youtube.com/embed/U0HWTWAi0G0",
      desc:
        "Express is a flexible Node.js web application framework which provides a wide set of features to develop both web and mobile applications. In this video, we dive into the features of this framework and also create a basic web application using Express.",
    },
    {
      title: "What Is Scrum In Agile Methodology?",
      video: "https://www.youtube.com/embed/uau6k1wp1us",
      desc:
        "Scrum is one of the most popular agile project management frameworks in the world. But have you wondered what makes it so special? Well, we have the answer for you!",
    },
  ]);
  //   const [desc] = useState([
  //     "Express is a flexible Node.js web application framework which provides a wide set of features to develop both web and mobile applications. In this video, we dive into the features of this framework and also create a basic web application using Express.",
  //     "Scrum is one of the most popular agile project management frameworks in the world. But have you wondered what makes it so special? Well, we have the answer for you!",
  //   ]);
  //   const [video] = useState([
  //     "https://www.youtube.com/embed/U0HWTWAi0G0",
  //     "https://www.youtube.com/embed/uau6k1wp1us",
  //   ]);
  let cards = cardContent.map((a) => (
    <CardCourse title={a.title} video={a.video} desc={a.desc} />
  ));
  return (
    <div className="profile">
      <BarProfile />
      <div className="block-card">{cards}</div>
    </div>
  );
}

export default Profile;

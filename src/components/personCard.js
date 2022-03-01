import React from "react";
import a from "../assets/avatar.png";
import "./styles/personCard.css";

const PersonCard = (props) => {
  let { img, name, description, githubLink } = props;
  if (!img) {
    img = a;
  }
  return (
    <div className="cardContainer">
      <a href={githubLink} target="_blank">
        <div className="avatarContainer">
          <img src={img} className="avatar" />
        </div>
        <h3>{name}</h3>
        {description && <div className="description">{description}</div>}
      </a>
    </div>
  );
};

export default PersonCard;

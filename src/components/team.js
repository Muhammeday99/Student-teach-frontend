import React from "react";
import PersonCard from "./personCard";
import shrreyaImg from "../assets/shrreya.png";
import ammarImg from "../assets/ammar.png";
import emirImg from "../assets/emir.png";
import ihabImg from "../assets/ihab.png";
import inasImg from "../assets/inas.png";
import muhammadImg from "../assets/muhammad.png";
import abdulrahmanImg from "../assets/abdulrahman.png";
import "./styles/team.css";

const Team = () => {
  const leads = [
    {
      name: "Shrreya",
      description: "Lead Engineer",
      img: shrreyaImg,
      githubLink: "https://github.com/Shrreya",
    },
    {
      name: "Ammar",
      description: "Lead Engineer",
      img: ammarImg,
      githubLink: "https://github.com/Ammar-64",
    },
  ];
  const engineers = [
    {
      name: "Emir",
      description: "Backend Developer",
      img: emirImg,
      githubLink: "https://github.com/emirsagit",
    },
    {
      name: "Ihab",
      description: "Backend Developer",
      img: ihabImg,
      githubLink: "https://github.com/ehabhalil",
    },
    {
      name: "Abdulrahman",
      description: "Backend Developer",
      img: abdulrahmanImg,
      githubLink: "https://github.com/alfawal",
    },
    {
      name: "Inas",
      description: "Backend Developer",
      img: inasImg,
      githubLink: "https://github.com/inasalarabi",
    },
    {
      name: "Muhammad",
      description: "Backend Developer",
      img: muhammadImg,
      githubLink: "https://github.com/Muhammeday99",
    },
  ];

  return (
    <div className="cardsContainer">
      <h1>Our Team</h1>
      <div className="teamContainer">
        {leads.map((lead) => (
          <PersonCard key={lead.name} {...lead} />
        ))}
      </div>
      <div className="teamContainer">
        {engineers.map((engineer) => (
          <PersonCard key={engineer.name} {...engineer} />
        ))}
      </div>
    </div>
  );
};
export default Team;

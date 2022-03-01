import React from "react";
import DBDesign from "./dbdesign";
import SysDesign from "./design";
import Documentation from "./documentation";
import GettingStarted from "./gettingStarted";
import PersonCard from "./personCard";
import TechList from "./tech";
import Team from "./team";
import "./styles/landing.css";

const Landing = () => {
  const cards = [
    {
      name: "Abdulrahman Alfawal",
      description:
        "Body placeholder for text paragraph, a paragraph is a self-contained unit of text description.",
    },
    {
      name: "Abdulrahman Alfawal",
      description:
        "Body placeholder for text paragraph, a paragraph is a self-contained unit of text description.",
    },
    {
      name: "Abdulrahman Alfawal",
      description:
        "Body placeholder for text paragraph, a paragraph is a self-contained unit of text description.",
    },
    {
      name: "Abdulrahman Alfawal",
      description:
        "Body placeholder for text paragraph, a paragraph is a self-contained unit of text description.",
    },
  ];
  return (
    <div>
      <GettingStarted />
      <TechList />
      <SysDesign />
      <DBDesign />
      <Documentation />
      <Team />
    </div>
  );
};

export default Landing;

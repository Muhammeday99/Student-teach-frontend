import React from "react";
import docker from "../assets/docker.png";
import expressImg from "../assets/express.png";
import jsImg from "../assets/js.png";
import mongoImg from "../assets/MongoDB_Logo.png";
import reactImg from "../assets/React.png";
import mongooseImg from "../assets/mongoose.png";
import jestImg from "../assets/jest.png";
import prettierImg from "../assets/prettier.png";
import eslintImg from "../assets/eslint.png";
import awsImg from "../assets/aws.png";
import "./styles/tech.css";

const TechList = () => {
  const imgList = [
    docker,
    jsImg,
    expressImg,
    mongoImg,
    mongooseImg,
    reactImg,
    jestImg,
    prettierImg,
    eslintImg,
    awsImg,
  ];

  return (
    <div className="techContainer">
      <h1>Technologies Used</h1>
      <div className="imgContainer">
        {imgList.map((item) => {
          return (
            <div>
              <img key={item} src={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TechList;

import React from "react";
import BorderContainer from "../components/BorderContainer";
import Image from "react-bootstrap/Image";



function Portfolio() {
  return (
    <BorderContainer>
      {/* Project 1 */}
      <div className="projectContainer leftSlide">
        {/* Image */}
        <Image className="projectImage" src="./images/projects/vybe.png"/>
        {/* Description */}
        <div className="projectDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi
          nullam vehicula ipsum a arcu cursus vitae.
        </div>
      </div>

      {/* Project 2 */}
      <div className="projectContainer">
        {/* Description */}
        <div className="projectDescription">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi
          nullam vehicula ipsum a arcu cursus vitae.
        </div>
        {/* Image */}
        <Image className="projectImage" src="SecondCup.jpg"/>
      </div>

    </BorderContainer>
  );
}

export default Portfolio;

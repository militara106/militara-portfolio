import React from "react";
import BorderContainer from "../components/BorderContainer";
import Image from "react-bootstrap/Image";

function Home() {
  return (
    <BorderContainer>
      <Image
        alt="profilePic"
        src="./images/profile.jpg"
        className="homeImage"
        thumbnail
      />
      <div className="homeDesc">
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi
          nullam vehicula ipsum a arcu cursus vitae.
        </h4>
      </div>
    </BorderContainer>
  );
}

export default Home;

import React, { useState } from "react";
import "./CardWordsPages.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToLinkButton from "../../../Components/Buttons/ToLinkButton/ToLinkButton";

function Work() {
    const [response, setResponse] = useState('');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const headerStyle = {
        transform: `translate(${(mousePosition.x / 100) - 5}px, ${(mousePosition.y / 100) - 5}px)`,
        transition: 'transform 0.1s',
    };

  return (
    <>
      <div className="container text-center" onMouseMove={handleMouseMove}>
        <ToLinkButton link={"/topics-page"} placeholder={"Topics"} />
        <h1 className="header" style={headerStyle}>
          Work Topic
        </h1>
      </div>
    </>
  );
}

export default Work;

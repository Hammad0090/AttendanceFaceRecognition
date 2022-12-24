import React, { useRef } from "react";
import Webcam from "react-webcam";

function WebCam() {
  const webref = useRef(null);
  let img = null;
  const showImage = () => {
    console.log(webref.current.getScreenshot());
    img = webref.current.getScreenshot();
  };
  return (
    <div className="App">
      <h3>Webcam</h3>
      <Webcam ref={webref} />
      <button
        onClick={() => {
          showImage();
        }}
      >
        Show Image in Console
      </button>
      <img src={img}></img>
    </div>
  );
}

export default WebCam;

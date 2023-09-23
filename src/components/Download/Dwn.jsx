import "./dwn.css";
import React from "react";
import myphoto from "../../img/myporfolio.png"; // Import your photo
function Dwn() {
  const handleDownload = () => {
    // Create a link element
    const downloadLink = document.createElement("a");
    downloadLink.href = myphoto; // Set the photo as the href
    downloadLink.download = "PhooPyaePyaeSoe_Porfolio.jpg"; // Set the downloaded file name

    // Trigger a click on the link element to start the download
    downloadLink.click();
  };

  return (
    <div>
      <button onClick={handleDownload} class="css-button-arrow--green">
        Download CV
      </button>
    </div>
  );
}

export default Dwn;

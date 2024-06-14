import React from "react";

//function
export default function Portfolio(){
return(<>
<div id="port-title">Portfolio</div>
<div className="projects">
    <div className="Project-1">
    <div className="image1">
        <img src="https://cdn.ttgtmedia.com/rms/onlineimages/Math_programming_calc_figure_2_half_column_mobile.jpg" alt="Calculator" width={180 + 'px'} height={180 + 'px'}></img>
        <p id="calculator">calculator</p>
        <img id='G1' width={30 + 'px'} height={30 + 'px'} src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='github logo'></img>
    </div>
    </div>
    <div className="Project-2">
    <div className="image2">
        <img src="https://play-lh.googleusercontent.com/Y3RjFoyrPzj9KSs1vPXvmxmS7Fm88Nb1ej0E2LFFTs64OuMyI7mkMSHqrS0htFsUuO0=w240-h480-rw" alt="ChatApp" width={180 + 'px'} height={180 + 'px'}></img>
        <p>Messaging App</p>
        <img id='G2' width={30 + 'px'} height={30 + 'px'} src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='github logo'></img>
    </div>
    </div>
    <div className="Project-3">
    <div className="image3">
        <img src="https://cdn-icons-png.freepik.com/512/7477/7477790.png" alt="weather" width={190 + 'px'} height={190 + 'px'}></img>
        <p>Weather App</p>
        <img id='G3' width={30 + 'px'} height={30 + 'px'} src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='github logo'></img>
    </div>
    
    </div>
    <div className="Project-4">
    <div className="image4">
        <img src="https://static.wixstatic.com/media/e4256a_08ecd1c0638b418cb33cbd99e6e3d76b~mv2.png" alt="Music" width={180 + 'px'} height={180 + 'px'}></img>
        <p>Music App</p>
        <img id='G4' width={30 + 'px'} height={30 + 'px'} src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='github logo'></img>
    </div>
    
    </div>

</div>
</>);
}

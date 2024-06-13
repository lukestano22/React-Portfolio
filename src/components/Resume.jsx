import React from "react";
//function
export default function Resume(){
    return(<>
    <div>
        <h5>Resume</h5>
        <p>Download my resume</p>
    </div>
    <div className="front-end">
        <h5>Front End Proficiencies</h5>
        <ol>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>Linux Basics</li>
        </ol>
    </div>
    <div className="Back-end">
        <h5>Back End Proficiencies</h5>
        <ol>
            <li>Node.js</li>
            <li>APIs</li>
            <li>Express.js</li>
            <li>SQL, Sequelize</li>
            <li>NoSQL, Mongoose</li>
            <li>React</li>
        </ol>
    </div>
    </>)
}

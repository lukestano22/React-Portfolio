import React from "react";
//function
export default function Resume(){
    return(<>
    <div>
        <h2>Resume</h2>
        <p>Download my resume</p>
    </div>
    <div className="front-end">
        <h2>Front End Proficiencies</h2>
        <ol>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>Linux Basics</li>
        </ol>
    </div>
    <div className="Back-end">
        <h2>Back End Proficiencies</h2>
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

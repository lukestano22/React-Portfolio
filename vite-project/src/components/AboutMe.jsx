import { useState } from "react"
//hooks
const[Photo, setPhoto] = useState('');
const[Bio,setBio] = useState('');
//AboutMe XML
export default function AboutMe(){
    return(<>
    <div className="About-Me"><h3>About Me</h3></div>
    <div id="Photo">
        <img src=""></img>
    </div>
    <div className="paragraph">
        <p>Hello everyone, my name is Paul Bilbatua</p>
    </div>
    </>)
}



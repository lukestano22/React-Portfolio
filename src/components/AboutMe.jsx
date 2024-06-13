import { useState } from "react"
//AboutMe XML
export default function AboutMe(){
    //hooks
    const[Photo, setPhoto] = useState('');
    const[Bio,setBio] = useState('');
    return(<>
    <div className="About-Me"><h3>About Me</h3></div>
    <div id="Photo-Me">
        <img src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=" 
        alt="avatar"
        width={100 + 'px'}
        height={100 + 'px'}
        ></img>
    </div>
    <div className="paragraph">
        <p>Hello everyone, my name is Paul Bilbatua and I am looking to become a full stack developer, and I applied the most used technologies to create my projects
        in my projects posted here on this section, so everyone can take a llok about what I had accomplished during my coding journey using both front and back end tecnologies</p>
    </div>
    </>)
}



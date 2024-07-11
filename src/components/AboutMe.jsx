import { useState } from "react"
//AboutMe XML
export default function AboutMe(){
    //hooks
    const[Photo, setPhoto] = useState('');
    const[Bio,setBio] = useState('');
    return(<>
        <div className="About-Me"><h3>About Me</h3></div>
        <section className="about-me">
            <h2>Welcome!</h2>
            <p>
                Hello everyone, my name is Luke Stano. I am an aspiring full stack developer with a passion for creating dynamic and responsive web applications. Throughout my coding journey, I have utilized a variety of front-end and back-end technologies to bring my projects to life.
            </p>
            <p>
                In this section, you will find a showcase of my work, demonstrating the skills and knowledge I have acquired in both client-side and server-side development. I am excited to share my accomplishments and look forward to connecting with like-minded professionals and potential collaborators.
            </p>
            <p>
                Please feel free to explore my portfolio, and do not hesitate to reach out if you have any questions or opportunities. Thank you for visiting!
            </p>
        </section>
    </>)
}



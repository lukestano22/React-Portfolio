//importing useState
import { useState } from "react";
//useState hook to hold data from contact information
const[Name, setName] = useState('Paul');
const[Email, setEmail] = useState('paul_bilbatua@hotmail.com');
const[Message, setMessage] = useState('');
//handler to avoid any issues when sending form
//function
export default function Contact(){
return(<>
    <form>
      <div>
        <label>Name:</label>
        <input type="text" value={Name} onChange={(e)=>setName(e.target.value)}></input>
        </div>
        <div>
        <label>Email:</label>
        <input type="text" value={Email} onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div>
        <label>Message:</label>
        <input type="text" value={Message} onChange={(e)=>setMessage(e.target.value)}></input>
        </div>
            <button type="submit">Submit</button>
    </form>
</>)
}
//importing useState
import { useState } from "react";
//function
export default function Contact(){
  //useState hook to hold data from contact information
const[Name, setName] = useState('Paul');
const[Email, setEmail] = useState('paul_bilbatua@hotmail.com');
const[Message, setMessage] = useState('');
//event handling in case something goes wrong when submiting form
const handling = function (event){
event.preventDefault();
console.log('Name',Name);
console.log('Email', Email);
console.log('Message',Message);
}
return(<>
    <form onSubmit={handling()}>
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
        <textarea type="text" value={Message} onChange={(e)=>setMessage(e.target.value)}></textarea>
        </div>
            <button type="submit">Submit</button>
    </form>
</>)
}
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import './ex3.css'

function CheckSkillEx3() {
    const navigate = useNavigate();

    const [bgColor, setBgColor] = useState("")


    const changeBgColor = () => {
        document.body.style.backgroundColor = bgColor
    }

    const mouseOverHandler = () => {
        console.log("mouse over")
    }

    const handleKeyUp = (event) => {
        console.log("Key Pressed:", event.key) // Logs the key name
    }

    const [email, setEmail] = useState("")

    const checkEmail = (email) => {
        if (isEmailValid(email)) {
            console.log("Email is valid");
        } else {
            console.log("Email is invalid");
        }
    }
    const isEmailValid = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email) && (email.endsWith(".com") || email.endsWith(".net"));
      };

    return ( 
        <div>
            <button className="btn btn-primary home-button" onClick={() => navigate("/")}>Home</button>
            <h1>Ex3</h1>
            <h3>part 1</h3>
            <label >color input : </label>
            <input type="text" value={bgColor} onChange={(e) => setBgColor(e.target.value)} /> <br />
            <button className="btn btn-success mt-3" onClick={changeBgColor} >Submit</button>
            <hr />
            <h3>part 2</h3>
            <p className="text-hover" onMouseOver={() => mouseOverHandler()}>try hovering over this text</p>
            <input type="text" onKeyUp={handleKeyUp} placeholder="Press any key" />
            <hr />
            <h3>part 3</h3>
            <form action="">
                <label>Email : </label>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
                <button className="btn btn-success mt-3" onClick={() => checkEmail(email)} >Submit</button>
            </form>

        </div>
     );
}

export default CheckSkillEx3;
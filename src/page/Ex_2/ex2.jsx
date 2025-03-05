import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './ex2.css'

function CheckSkillEx2() {
    const navigate = useNavigate();

    // -------part 1--------
    const [int, setInt] = useState(0);
    const [string, setString] = useState("");
    const [boolean, setBoolean] = useState(false);

    const handleClick = () => {
        console.log("int : "+ int + ", type : " + typeof parseInt(int));

        console.log("string : "+ string + ", type : " + typeof string);

        console.log("boolean : "+ boolean + ", type : " + typeof boolean);
    }

    return ( 
        <div className="ex2-container">
        <button className="btn btn-primary home-button" onClick={() => navigate("/")}>Home</button>
        <h1>Ex2</h1>
        <h3>part 1</h3>
        <div className="ex2-input-container">
            <span className="mb-3">
                <label className="mr-3">int : </label>
                <input type="number" value={int} onChange={(e) => setInt(parseInt(e.target.value) || 0)} />
            </span>
            <span className="mb-3">
                <label className="mr-3">string : </label>
                <input type="text" value={string} onChange={(e) => setString(e.target.value)} />
            </span>
            <span className="mb-3">
                <label className="mr-3">boolean : </label>
                <input type="checkbox" checked={boolean} onChange={(e) => setBoolean(e.target.checked)} />
            </span>
        </div>
        <button className="btn btn-success" onClick={handleClick}>Submit</button>
        <p>value of int = {int}</p>
        <p>value of string = {string}</p>
        <p>value of boolean = {boolean ? "true" : "false"}</p>

    </div>
     );
}

export default CheckSkillEx2;
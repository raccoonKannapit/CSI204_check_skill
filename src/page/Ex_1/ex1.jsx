import { useNavigate } from "react-router-dom";

import './ex1.css'

function checkSkillEx1() {
    const navigate = useNavigate();

    return ( 
    <div className="ex1-container">
        <button className="btn btn-primary home-button" onClick={() => navigate("/")}>Home</button>
        <h1>Ex1</h1>
        <a href="https://github.com/raccoonKannapit/CSI204_check_skill" target="_blank">GitHub link</a>
    </div> 
    );
}

export default checkSkillEx1;
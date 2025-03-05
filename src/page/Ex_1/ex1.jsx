import { useNavigate } from "react-router-dom";

function checkSkillEx1() {
    const navigate = useNavigate();

    return ( 
    <div>
        <button className="btn btn-primary home-button" onClick={() => navigate("/")}>Home</button>
        <h1>Ex1</h1>
        <a href="https://github.com/raccoonKannapit/CSI204_check_skill">GitHub link</a>
    </div> 
    );
}

export default checkSkillEx1;
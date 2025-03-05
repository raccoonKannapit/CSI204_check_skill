import { useNavigate } from "react-router-dom";

function CheckSkillEx5() {
    const navigate = useNavigate();

    return ( 
        <div>
            <button className="btn btn-primary home-button" onClick={() => navigate("/")}>Home</button>
            <h1>Ex5</h1>
        </div>
     );
}

export default CheckSkillEx5;
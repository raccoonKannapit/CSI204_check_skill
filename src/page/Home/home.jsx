import { useNavigate } from "react-router-dom";

import './home.css'

function home() {
    const navigate = useNavigate();

    return ( 
        <div className="home-container">
            <h1>Home</h1>
            <div className="home-button-container">
                <button className="btn btn-primary" onClick={() => navigate("/ex1")}>Ex1</button>
                <button className="btn btn-primary" onClick={() => navigate("/ex2")}>Ex2</button>
                <button className="btn btn-primary" onClick={() => navigate("/ex3")}>Ex3</button>
                <button className="btn btn-primary" onClick={() => navigate("/ex4")}>Ex4</button>
                <button className="btn btn-primary" onClick={() => navigate("/ex5")}>Ex5</button>
            </div>
        </div>
     );
}

export default home;
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import './ex5.css'

function CheckSkillEx5() {
    const navigate = useNavigate();

    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [score3, setScore3] = useState(0);
    const [score4, setScore4] = useState(0);
    const [score5, setScore5] = useState(0);

    const [credit1, setCredit1] = useState(3);
    const [credit2, setCredit2] = useState(3);
    const [credit3, setCredit3] = useState(3);
    const [credit4, setCredit4] = useState(3);
    const [credit5, setCredit5] = useState(3);

    const [grade1, setGrade1] = useState("");
    const [gpa, setGpa] = useState("");

    const calculateGPA = () => {
        let totalScore = 
        (convertScoreToGPA(score1) * credit1) +
        (convertScoreToGPA(score2) * credit2) +
        (convertScoreToGPA(score3) * credit3) +
        (convertScoreToGPA(score4) * credit4) +
        (convertScoreToGPA(score5) * credit5);

    let totalCredit = Number(credit1) + Number(credit2) + Number(credit3) + Number(credit4) + Number(credit5);
    let tempGPA = totalScore / totalCredit;

        console.log(totalScore)
        console.log(totalCredit)

        setGpa(tempGPA.toFixed(2));

        
        if (tempGPA >= 4) {
            setGrade1("A");
        } else if (tempGPA >= 3.5) {
            setGrade1("B+");
        } else if (tempGPA >= 3) {
            setGrade1("B");
        } else if (tempGPA >= 2.5) {
            setGrade1("C+");
        } else if (tempGPA >= 2) {
            setGrade1("C");
        } else if (tempGPA >= 1.5) {
            setGrade1("D+");
        } else if (tempGPA >= 1) {
            setGrade1("D");
        } else {
            setGrade1("F");
        }
        console.log(tempGPA);
    }

    const convertScoreToGPA = (score) => {
        if (score >= 80) return 4.0;
        if (score >= 75) return 3.5;
        if (score >= 70) return 3.0;
        if (score >= 65) return 2.5;
        if (score >= 60) return 2.0;
        if (score >= 55) return 1.5;
        if (score >= 50) return 1.0;
        return 0.0;
    };

    // -------part 3--------

    const [users, setUsers] = useState([]);
    
    // State for loading and error handling
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json()) // Parse the JSON response
            .then((data) => {
                setUsers(data);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    // -------part 4--------

    const [lotteryNumbers, setLotteryNumbers] = useState();
    const [userInput, setUserInput] = useState("");
    const [result, setResult] = useState("");

    useEffect(() => {
        generateLotteryNumbers();
    }, []);

    const generateLotteryNumbers = () => {
        const newNumber = Math.floor(Math.random() * 900000) + 100000;
        setLotteryNumbers(newNumber);
        console.log("New lottery number generated: " + newNumber);
    };

    const checkLottery = async () => {
        if (parseInt(userInput) === lotteryNumbers) {
            setResult("You win!");
        } else {
            setResult("You lose!");
        }

        generateLotteryNumbers();
    };

    return ( 
        <div className="ex5-container">
            <button className="btn btn-primary home-button" onClick={() => navigate("/")}>Home</button>
            <h1>Ex5</h1>
            <table className="ex5-table">
                <thead>
                    <tr>
                        <th>รหัสวิชา</th>
                        <th>คะแนนที่ได้</th>
                        <th>หน่วยกิต</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CSI101</td>
                        <td><input className="borderless" type="number" value={score1} onChange={(e) => setScore1(Number(e.target.value))} /></td>
                        <td><input className="borderless" type="number" value={credit1} onChange={(e) => setCredit1(Number(e.target.value))} /></td>
                    </tr>
                    <tr>
                        <td>CSI102</td>
                        <td><input className="borderless" type="number" value={score2} onChange={(e) => setScore2(Number(e.target.value))} /></td>
                        <td><input className="borderless" type="number" value={credit2} onChange={(e) => setCredit2(Number(e.target.value))} /></td>
                    </tr>
                    <tr>
                        <td>CSI203</td>
                        <td><input className="borderless" type="number" value={score3} onChange={(e) => setScore3(Number(e.target.value))} /></td>
                        <td><input className="borderless" type="number" value={credit3} onChange={(e) => setCredit3(Number(e.target.value))} /></td>
                    </tr>
                    <tr>
                        <td>CSI204</td>
                        <td><input className="borderless" type="number" value={score4} onChange={(e) => setScore4(Number(e.target.value))} /></td>
                        <td><input className="borderless" type="number" value={credit4} onChange={(e) => setCredit4(Number(e.target.value))} /></td>
                    </tr>
                    <tr>
                        <td>CSI305</td>
                        <td><input className="borderless" type="number" value={score5} onChange={(e) => setScore5(Number(e.target.value))} /></td>
                        <td><input className="borderless" type="number" value={credit5} onChange={(e) => setCredit5(Number(e.target.value))} /></td>
                    </tr>
                </tbody>
            </table>
            <button className="btn btn-success mt-2" onClick={calculateGPA} >summit</button>
            <label>GPA : {gpa}</label>
            <label>grade : {grade1}</label>
            <hr />

            <h3>part 3</h3>
            <h4>User Information</h4>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            <table className="ex5-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{`${user.address.street}, ${user.address.city}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
                <hr />

            <h3>part 4</h3>
            <input type="number" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <button className="btn btn-success mt-2" onClick={checkLottery} >summit</button>
            <label htmlFor="">{result || '...'}</label>
        </div>
     );
}

export default CheckSkillEx5;
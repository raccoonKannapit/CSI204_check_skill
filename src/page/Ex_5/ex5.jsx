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

    const [gpa, setGpa] = useState(0);

    const calculateGPA = () => {
        let totalScore = (score1 * credit1) + (score2 * credit2) + (score3 * credit3) + (score4 * credit4) + (score5 * credit5);
        let totalCredit = credit1 + credit2 + credit3 + credit4 + credit5;
        let tempGPA = totalScore / totalCredit;
        if (tempGPA >= 80) {
            setGpa("A");
        } else if (tempGPA >= 75) {
            setGpa("B+");
        } else if (tempGPA >= 70) {
            setGpa("B");
        } else if (tempGPA >= 65) {
            setGpa("C+");
        } else if (tempGPA >= 60) {
            setGpa("C");
        } else if (tempGPA >= 55) {
            setGpa("D+");
        } else if (tempGPA >= 50) {
            setGpa("D");
        } else {
            setGpa("F");
        }
    }

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
                <tr>
                    <th>รหัสวิชา</th>
                    <th>คะแนนที่ได้</th>
                    <th>หน่วยกิต</th>
                </tr>
                <tr>
                    <td>CSI101</td>
                    <td><input type="number" value={score1} onChange={(e) => setScore1(e.target.value)} /></td>
                    <td><input type="number" value={credit1} onChange={(e) => setCredit1(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>CSI102</td>
                    <td><input type="number" value={score2} onChange={(e) => setScore2(e.target.value)} /></td>
                    <td><input type="number" value={credit2} onChange={(e) => setCredit2(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>CSI203</td>
                    <td><input type="number" value={score3} onChange={(e) => setScore3(e.target.value)} /></td>
                    <td><input type="number" value={credit3} onChange={(e) => setCredit3(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>CSI204</td>
                    <td><input type="number" value={score4} onChange={(e) => setScore4(e.target.value)} /></td>
                    <td><input type="number" value={credit4} onChange={(e) => setCredit4(e.target.value)} /></td>
                </tr>
                <tr>
                    <td>CSI305</td>
                    <td><input type="number" value={score5} onChange={(e) => setScore5(e.target.value)} /></td>
                    <td><input type="number" value={credit5} onChange={(e) => setCredit5(e.target.value)} /></td>
                </tr>
            </table>
            <button className="btn btn-success mt-2" onClick={calculateGPA} >summit</button>
            <label>GPA : {gpa}</label>
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
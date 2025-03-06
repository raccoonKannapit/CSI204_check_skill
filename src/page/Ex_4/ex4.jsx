import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckSkillEx4() {
    const navigate = useNavigate();

    const [result, setResult] = useState("");
    const [radius, setRadius] = useState(0);

    const calculate = () => {
        // area for circle = pi * r^2
        let area = Math.PI * radius * radius;
        setResult(Math.round(area));
    }

    // part 2-----------------------------------

    const [age, setAge] = useState(0);
    const [result2, setResult2] = useState("");

    const checkAge = () => {
        if (age >= 18) {
            setResult2("Adult");
        } else if (age >= 13) {
            setResult2("Teenager");
        } else {
            setResult2("Kid");
        }
    }

    // part 3-----------------------------------

    // const [result3, setResult3] = useState("");

    const loop = () => {
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }
    }

    // part 4-----------------------------------

    const [result4, setResult4] = useState([]);
    const [num, setNum] = useState([]);

    const randomNumber = () => {
        const newNumbers = [];
        for (let i = 0; i < 100; i++) {
          const random = Math.floor(Math.random() * 100) + 1;
          newNumbers.push(random);
        }
        setNum(newNumbers); // Update state with the new array
    }

    const sortNumber = () => {
        let temp;
        let size = num.length;

        let numCopy = [...num];
        // bubble sort
        for(let i = 0 ; i < size-1 ; i++){
            for(let j = 0 ; j < (size-i)-1 ; j++){
                if(numCopy[j] > numCopy[j+1]){
                    temp = numCopy[j];
                    numCopy[j] = numCopy[j+1];
                    numCopy[j+1] = temp;
                }
            }
        }
        setResult4(numCopy);
    }

    // part 5-----------------------------------

    const [num5, setNum5] = useState();
    const [result5, setResult5] = useState();
    const [num5Fibo, setNum5Fibo] = useState();
    const [result5Fibo, setResult5Fibo] = useState();

    const displayFac = () => {
        setResult5(factorial(num5));
    }

    const displayFibo = () => {
        setResult5Fibo(fibonacci(num5Fibo));
    }

    const factorial = (n) => {
        if(n == 0 || n == 1){
            return 1;
        } else {
            return n*factorial(n-1)
        }
    }

    const fibonacci = (n) => {
        if(n == 1){
            return 0;
        } else if(n == 2){
            return 1;
        } else if(n > 2){
            return fibonacci(n-2) + fibonacci(n-1);
        }
    }
    
    // debugger

    return ( 
        <div>
            <button className="btn btn-primary home-button" onClick={() => navigate("/")}>Home</button>
            <h1>Ex4</h1>

            <h3>part 1</h3>
            <label htmlFor="">Enter Radius : </label>
            <input type="number" value={radius} onChange={(e) => setRadius(e.target.value)} /> <br />
            <button className="btn btn-success mt-2" onClick={calculate}>Submit</button> <br />
            <label>result : {result || "..."}</label>
            <hr />

            <h3>part 2</h3>
            <label htmlFor="">Enter Age : </label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} /> <br />
            <button className="btn btn-success mt-2" onClick={checkAge}>Submit</button> <br />
            <label>result : {result2 || "..."}</label>
            <hr />

            <h3>part 3</h3>
            <button className="btn btn-success mt-2" onClick={loop}>start loop</button>
            {/* <label htmlFor="">{result3}</label> */}
            <hr />

            <h3>part 4</h3>
            <button className="btn btn-success" onClick={randomNumber}>random number</button><br />
            <label htmlFor="">number before sort : {num.join(", ")} </label><br />
            <button className="btn btn-success" onClick={sortNumber}>Sort</button><br />
            <label htmlFor="">number after sort : {result4.join(", ")} </label>
            <hr />

            <h3>part 5</h3>
            <label htmlFor="">Enter number : </label>
            <input type="number" value={num5} onChange={(e) => setNum5(e.target.value)} /> <br />
            <button className="btn btn-success mt-2" onClick={displayFac}>Submit factorial</button> <br />
            <label>result :  {(num5 || "...") + " ! = " + (result5 || "...")}</label><br />

            <label htmlFor="">Enter number : </label>
            <input type="number" value={num5Fibo} onChange={(e) => setNum5Fibo(e.target.value)} /> <br />
            <button className="btn btn-success mt-2" onClick={displayFibo}>display fibonacci</button><br />
            <label>result :  {result5Fibo || "..."}</label>
        </div>
     );
}

export default CheckSkillEx4;
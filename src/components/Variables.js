import { useState } from 'react';


function Variables() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [result, setResult] = useState(0);

    function calculatorFunction(type) {
        switch (type) {
            case "add": {
                setResult(x + y);
                console.log("dodaje");
                break;
            }
            case "subtraction": {
                setResult(x - y);
                console.log("odejmuje");
                break;

            }
            case "multiplication": {
                setResult(x * y);
                console.log("mnoze");
                break;
            }
            case "division": {
                setResult(x / y);
                console.log("dziele");
                break;

            }
            case "power": {
                setResult(Math.pow(x, y));
                console.log("potega");
                break;

            }
        }
    }


    return <div>
        <div className="container">
            <label for="x">X:</label>
            <input
                id="x"
                className="x"
                type="number"
                placeholder="0"
                value={x}
                onChange={e => setX(+e.target.value)}
            />
            <label for="y">Y:</label>
            <input
                id="y"
                className="y"
                type="number"
                placeholder="0"
                value={y}
                onChange={e => setY(+e.target.value)}
            />
        </div>

        <div className="buttons">
            <button onClick={() => calculatorFunction("add")}>X + Y</button>
            <button onClick={() => calculatorFunction("subtraction")}>X - Y</button>
            <button onClick={() => calculatorFunction("multiplication")}>X &times; Y</button>
            <button onClick={() => calculatorFunction("division")}>X &divide; Y</button>
            <button onClick={() => calculatorFunction("power")}>X <sup>Y</sup></button>
        </div>

        <h2>{result}</h2>

    </div>

}

export default Variables;
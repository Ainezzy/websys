import { useState } from "react";
import './Calculator.css'; 

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        if (value === '=') {
            try {
                setInput(eval(input));
            } catch (err) {
                alert("Invalid");
            }
            return;
        }
        if (value === 'C') {
            setInput('');
            return;
        }
        if (value === 'DEL') {
            setInput(input.slice(0, -1));
            return;
        }
        setInput(input + value);
    };
    return (
        <>
        <h1 class="about">A Simple Calculator</h1>
        <div className="container">
            <div className="calculator">
                <input type="text" placeholder="0" value={input} readOnly />
                <button onClick={() => handleButtonClick('C')}>C</button>
                <button onClick={() => handleButtonClick('DEL')}>DEL</button>
                <button onClick={() => handleButtonClick('%')}>%</button>
                <button onClick={() => handleButtonClick('/')}>/</button>
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('+')}>+</button>
                <button onClick={() => handleButtonClick('.')}>.</button>
                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={() => handleButtonClick('=')} id="equal">=</button>
            </div>
        </div>
        </>
    );
};

export default Calculator;
import React, { useState } from "react";

const FormWithDisplay = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [displayedValues, setDisplayedValues] = useState([]);

  const handleInputChange = (event, inputNumber) => {
    const value = event.target.value;
    if (inputNumber === 1) {
      setInput1(value);
    } else if (inputNumber === 2) {
      setInput2(value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setDisplayedValues([...displayedValues, { input1, input2 }]);
    setInput1("");
    setInput2("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Input 1:
          <input
            type="text"
            value={input1}
            onChange={(e) => handleInputChange(e, 1)}
          />
        </label>
        <br />
        <label>
          Input 2:
          <input
            type="text"
            value={input2}
            onChange={(e) => handleInputChange(e, 2)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Display</h2>
        <ul>
          {displayedValues.map((values, index) => (
            <li key={index}>
              Input 1: {values.input1}, Input 2: {values.input2}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FormWithDisplay;

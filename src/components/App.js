import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <label>Enter your name:</label>
      <input type="text" value={inputValue} onChange={handleInputChange} />

      <p>Hello {inputValue}!</p>
    </div>
  );
};

export default App;

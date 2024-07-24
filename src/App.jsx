import Headder from "./components/header.jsx";
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const isValid = userInput.duration >= 1;

  
  function handleInputs(inputId, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputId]: +newValue,
      };
    });
  }

  return (
    <>
    <Headder/>
    <UserInput userInput={userInput} onChangeInput={handleInputs}/>
    {!isValid && <p className="center">Please enter valid data</p> }
    {isValid && <Results data={userInput}/>}
    </>
  );
}

export default App

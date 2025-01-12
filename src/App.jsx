import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DisplayValue from "./Components/DisplayValue";
import Heading from "./Components/Heading";
import { useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState("");

  const handleOnClick = (buttonText) => {
    if (buttonText === "c") {
      setInputValue("");
    } else if (buttonText === "=") {
      let result = eval(inputValue) ;
      setInputValue(result);
    } else {
      let displaynewValue = inputValue + buttonText;
      setInputValue(displaynewValue);
    }
  };
  



  return (
    <>
      <Heading />
      <DisplayValue
        IntialValue={inputValue}
        setInputValue={setInputValue}
        OnClickhandler={handleOnClick}
            
      />
    </>
  );
}

export default App;

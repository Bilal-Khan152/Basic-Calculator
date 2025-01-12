import React from "react";

function DisplayValue({ IntialValue,setInputValue ,  OnClickhandler  }) {
  const buttons = [
    "c",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "/",
    "-",
    "+",
    "*",
    "=",
  ];

  //  window.addEventListener('keydown',function(e){

  //   //console.log(e.target.value)

  //   setInputValue(e.key) 

  //  })
 
    
  return (
    <div className="container">
      <div className="row">
        <div className="input-group flex-nowrap">
          <input
            type="text"
            className="displayInput"
            value={IntialValue}
            placeholder="Enter a number..."
            onChange={(e)=>setInputValue(e.target.value)}
            
          />
        </div>
      </div>

      <div className="row ButtonContainer">
        {buttons.map((btn) => (
          <button
            type="button"
            key={btn}
            className="Buttons"
            onClick={() =>OnClickhandler (btn)}
            >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DisplayValue;

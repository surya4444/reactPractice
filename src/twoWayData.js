import React, { useEffect, useRef, useState } from "react";

const TwoWayDataBiding = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputName, setInputName] = useState("");
  // const previousInputValue = useRef("");
  // console.log(previousInputValue);

  // useEffect(() => {
  //   previousInputValue.current = inputValue;
  // }, [inputValue]);

  console.log("surya");
  const focusPoint = useRef();
  const onClickHandler = () => {
    setInputName(focusPoint.current.value);
  };

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Directly without any action: {inputValue}</p>
      {/* <h2>Previous Value: {previousInputValue.current}</h2> */}

      <button onClick={onClickHandler}>ACTION</button>
      <input type="text" ref={focusPoint} />
      <p>This is the enter value with action: {inputName}</p>
    </>
  );
};

export default React.memo(TwoWayDataBiding);

import React, { useEffect, useRef, useState } from "react";
import "./inputValidation.css";

const InputValidation = () => {
  const [input, setInput] = useState("");
  // const [enteredInputIsValid, setEnteredInputIsValid] = useState(false);
  const [enteredInputIsTouched, setEnteredInputIsTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);
  // const [inputRefState, setinputRefState] = useState("");
  // const inputRef = useRef();
  const enteredInputIsValid = input.trim() !== "";
  const checkBoth = !enteredInputIsValid && enteredInputIsTouched;
  let formIsValid = false;
  // useEffect(() => {
  if (enteredInputIsValid) {
    formIsValid = true;
  }
  // else {
  //   setFormIsValid(false);
  // }
  // }, [enteredInputIsValid]);
  const inputChangeHandular = (e) => {
    //setInput(e.target.value); //only use useState
    //setinputRefState(inputRef.current.value); // use both ref and state
    setInput(e.target.value);
    //setInput("");
    //inputRef.current.value = ''//manapulate dom is not preferable so dont use ref for two way data bidding
  };

  const inputBlurHandular = () => {
    setEnteredInputIsTouched(true);
  };

  const submitHandular = (e) => {
    e.preventDefault();

    setEnteredInputIsTouched(true);
    if (!enteredInputIsValid) {
      return;
    }
    // const enteredValue = inputRef.current.value;
    // console.log(enteredValue);
    setInput("");
    setEnteredInputIsTouched(false);
  };

  const className = checkBoth ? "invalid" : "";

  return (
    <>
      <p>
        <b>Form input validation</b>
      </p>
      <form onSubmit={submitHandular}>
        <input
          type="text"
          value={input}
          onChange={inputChangeHandular}
          onBlur={inputBlurHandular}
          className={className}
        />
        <br />
        {checkBoth && <p>Name must not be empty.</p>}
        <button disabled={!formIsValid}>click</button>
      </form>
    </>
  );
};

export default React.memo(InputValidation);

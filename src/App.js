import "./styles.css";
import React, { useContext } from "react";
import NumIncrease from "./NumIncrease";
import Create from "./useContext";
import TwoWayDataBiding from "./twoWayData";
import InputValidation from "./inputValidation";
import Form from "../src/inputValidater/form";

function App() {
  const ctx = useContext(Create);
  return (
    <React.Fragment>
      <h1>I have rendered {ctx.count} times!</h1>
      <NumIncrease />
      <TwoWayDataBiding />
      <InputValidation />
      <Form />
    </React.Fragment>
  );
}

export default React.memo(App);

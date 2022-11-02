import useInput from "./useInput";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const InputForm = () => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(firstNameValue, lastNameValue, emailValue);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError ? "invalid" : "";
  const lastNameClasses = lastNameHasError ? "invalid" : "";
  const emailClasses = emailHasError ? "invalid" : "";

  const btnMove = () => {
    document.getElementById("move");
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label htmlFor="name">First Name</label>
          <input
            className={firstNameClasses}
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p>Please enter a first name.</p>}
        </div>
        <div>
          <label htmlFor="name">Last Name</label>
          <input
            className={lastNameClasses}
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p>Please enter a last name.</p>}
        </div>
      </div>
      <div>
        <label htmlFor="name">E-Mail Address</label>
        <input
          className={emailClasses}
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p>Please enter a valid email address.</p>}
      </div>
      <div>
        <button id="move" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default InputForm;

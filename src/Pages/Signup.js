import "../App.css";
import { useState } from "react";
import { validateEmail } from "../utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function Signup () {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false
  });

  const getIsFormValid = () => {
    // Validate form
    return (
    firstName &&
    validateEmail(email) &&
    password.value.length >= 8
    )
  };

  const clearForm = () => {
    // reset form after submit
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword({ value: "", isTouched: false })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              id="first name"
              type="text"
              name="first name"
              placeholder="First name"
              value={firstName}
              onChange={(e)=> setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              id="last name"
              type="text"
              name="last name"
              placeholder="Last name"
              value={lastName}
              onChange={(e)=> setLastName(e.target.value)}/>
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              id="Email"
              type="text"
              name="Email"
              placeholder="Email address"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              id="Pw"
              type="password"
              name="Pw"
              placeholder="Password"
              value={password.value}
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value })
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true})
              }}/>
            {password.isTouched && password.value.length < 8 ? (<PasswordErrorMessage/>): null}
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default Signup;

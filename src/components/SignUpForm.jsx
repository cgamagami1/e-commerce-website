import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/firebase";
import FormInput from "./FormInput";
import Button from "./Button";
import "./signUpForm.scss";
import { defaultSignUpFormFields } from "../constants";

const SignUpForm = () => {
  const [ formFields, setFormFields ] = useState(defaultSignUpFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultSignUpFormFields);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Your passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      
      await createUserDocumentFromAuth(user, {displayName});
      resetFormFields();
    } 
    catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      else {
        console.log("user creation encountered an error", error);
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({...formFields, [name]: value});
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" required type="text" id="displayName" name="displayName" onChange={handleChange} value={displayName} />
        <FormInput label="Email" required type="email" id="email" name="email" onChange={handleChange} value={email} />
        <FormInput label="Password" required type="password" id="password" name="password" onChange={handleChange} value={password} />
        <FormInput label="Confirm Password" required type="password" id="confirmPassword" name="confirmPassword" onChange={handleChange} value={confirmPassword} />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
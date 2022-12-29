import FormInput from "./FormInput";
import Button from "./Button";
import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword } from "../utils/firebase";
import "./signInForm.scss";
import { defaultSignInFormFields } from "../constants";

const SignInForm = () => {
  const [ formFields, setFormFields ] = useState(defaultSignInFormFields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const resetFormFields = () => {
    setFormFields(defaultSignInFormFields);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await createAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    }
    catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert("incorrect password for email");
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
          break;
      }
    }
  }

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" required type="email" id="email" name="email" onChange={handleChange} value={email} />
        <FormInput label="Password" required type="password" id="password" name="password" onChange={handleChange} value={password} />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={logGoogleUser}>Google Sign In</Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
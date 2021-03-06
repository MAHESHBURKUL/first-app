import React from "react";
import './sign-in-style.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../costom-button-component/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.util";
class SignIn extends React.Component{
 constructor(props) {
    super(props);

    this.state = {

        email : '',
        password : ''
    }

 }

  handleSubmit = (event) => {
  event.preventDefault();
  this.state({email: '', password : ''})

  };
  handleChange = (event) =>{
   const { value, name} = event.target;
   this.setState({[name]: name});

  };
 render() {
  return(

    <div className="sign-in">
    <h1>I already have an account</h1>
    <span>Sign in with your email and password</span>

    <form onSubmit={this.handleSubmit}>
    <FormInput name="email" type="email" value={this.state.email} required handleChane={this.handleChange} label="email"/>
   
    <FormInput name="password" type="password" value={this.state.email} required  handleChange={this.handleChange} label="password"/>
    <div className="buttons"> <CustomButton type="submit">Sign In </CustomButton>
    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> {''} Sign In with Google {''} </CustomButton>
    </div>
   
    </form>
    </div>
  )

}

} export default SignIn;
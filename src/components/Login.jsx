import React, {useState} from 'react';
import UserPool from '../UserPool';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event)=>{

        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        })
        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        })

        user.authenticateUser(authDetails, {
            onSuccess: (data)=>{
                console.log(data)
            },
            onFailure: (error)=>{
                console.error(error)
            }
        })





        
        } 
    
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='email' >Email</label>
        <input value={email} onChange={(event)=> setEmail(event.target.value)}>

        </input>
        <label htmlFor='password' >Password</label>
        <input value={password} onChange={(event)=> setPassword(event.target.value)}>
            
        </input>
        
        
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;

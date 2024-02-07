import React, {useState} from 'react';
import UserPool from '../UserPool';
import './App.css';


const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event)=>{



        event.preventDefault();



        
        UserPool.signUp(email,password, [], null, (err, result)=>{
            if(result){
                console.log(result)
            } 
            if(err){
                console.log(err)
            }

        })
       
        } 
    
  return (
    <div className='Signup'>
      <form onSubmit={onSubmit} className='form'>
        <div>
        <label htmlFor='email' >Email:<span></span></label>
        <input value={email} onChange={(event)=> setEmail(event.target.value)}>

        </input>
        </div>
        <div>

        <label htmlFor='password' >Password</label>
        <input value={password} onChange={(event)=> setPassword(event.target.value)}>
            
        </input>
        </div>
        
        
        <button type='submit'>Signup</button>
      </form>
    </div>
  );
}

export default Signup;

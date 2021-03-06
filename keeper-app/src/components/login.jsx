import React,{useState} from 'react';
import './login.css';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:8000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }
 
export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  async function handleSubmit(e){
    console.log("sahil sharma");
    e.preventDefault();
    const token = await loginUser({ 
      username: username,
      password: password
    });
    setToken(token);
  }
  return(
    <div className="form-style-5">
      <h1>Please Log In</h1>
    <form onSubmit ={handleSubmit}> 
      <label>
        <p>Username</p>
        <input type="text" onChange = {e => setUsername(e.target.value)}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange = {e => setPassword(e.target.value)} />
      </label>
      <div>
        <button className="btn-submit" type="submit">Submit</button>
      </div>
    </form>
    </div>
  )
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
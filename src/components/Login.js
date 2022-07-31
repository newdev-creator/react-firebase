import React, {useRef, useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../utils/firebase.config";

function Login() {
  const loginEmail = useRef();
  const loginPassword = useRef();
  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail.current.value,
        loginPassword.current.value
        );
        console.log(user);
    } catch (error) {
      console.log(error.message);
        setError(true);
    }

    console.log(loginEmail.current.value, loginPassword.current.value);
  }

  return (
    <div className="login-container">
      <div className="login">
        <h3>Se connecter</h3>
        <form className="form-login" onSubmit={event => handleLogin(event)}>
          <input
            type="email"
            placeholder="Email"
            ref={loginEmail}
            required/>
          <input
            type="password"
            placeholder="Mot de passe"
            ref={loginPassword}
            required/>
          <input type="submit" value="Se connecter"/>
          <span>{error && "Le mail ou le mot de passe ne correspondent pas"}</span>
        </form>
      </div>
    </div>
  );
}

export default Login;
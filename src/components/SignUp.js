import React, {useRef, useState} from 'react';
import {auth} from "../utils/firebase.config";

function SignUp() {
  const registerEmail = useRef();
  const registerPassword = useRef();
  const [displayName, setDisplayName] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    try {
      auth.createUserWithEmailAndPassword(
        registerEmail.current.value,
        registerPassword.current.value
      ).then(async (userAuth) => {
        await userAuth.user.updateProfile({
          displayName
        });
        console.log(userAuth);
        // Pour que les infos aient le temps de se transférer, il faut forcer le rechargement de la page.
        window.location.reload();
      })
    } catch (error) {
      console.log(error.message);
    }

  }

  return (
    <div className="signup-container">
      <div className="signup">
        <h3>S'inscrire</h3>
        <form onSubmit={e => handleRegister(e)}>
          <input
            type="text"
            placeholder="Pseudo"
            onChange={(e) => setDisplayName(e.target.value)}
            required />
          <input
            type="email"
            placeholder="Email"
            ref={registerEmail}
            required />
          <input
            type="password"
            placeholder="Mot de passe"
            ref={registerPassword}
            required />
          <input type="submit" value="Valider l'inscription" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
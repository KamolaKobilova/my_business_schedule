import React, { FormEvent, useState, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../../libs/firebase";
import SignInCarousel from "./SignInCarousel";

import {
  Container,
  SignInBlock,
  Back,
  InputBlock,
} from "./StylesForSignIn/styles";
import { NavLink } from "react-router-dom";
import GoogleButton from "react-google-button";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);

  const auth = getAuth(app);

  useEffect(() => {
    if (redirectToHome) {
      window.location.href = "/main-home-page";
    }
  }, [redirectToHome]);

  const handleEmailSignIn = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          uid: user.uid,
          email: user.email,
        })
      );

      console.log("Successfully signed in with email!");
      setRedirectToHome(true);
    } catch (error) {
      console.error("Error signing in with email:", (error as Error).message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;

      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          uid: user.uid,
          email: user.email,
        })
      );

      console.log("Successfully signed in with Google!");
      setRedirectToHome(true);
    } catch (error) {
      console.error("Error signing in with Google:", (error as Error).message);
    }
  };

  return (
    <Container>
      <Back>
        <SignInBlock>
          <InputBlock>
            <NavLink to="/">
              {" "}
              <img src="/assets/SignInImg/logo.png" alt="Logo" />
            </NavLink>
            <h1>Sign in</h1>
            <p>to access the home page </p>
            <form onSubmit={handleEmailSignIn}>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <button type="submit">Sign In with Email</button>
            </form>
            <GoogleButton onClick={handleGoogleSignIn} />
          </InputBlock>
          <SignInCarousel />{" "}
        </SignInBlock>
      </Back>
    </Container>
  );
};

export default SignIn;

// src/components/SignUp.tsx
import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  // const handleSignUp = async () => {
  //   try {
  //     await firebase.auth().createUserWithEmailAndPassword(email, password);
  //     history.push('/dashboard'); // Redirect to dashboard or any desired page
  //   } catch (error) {
  //     console.error('Error signing up:', error.message);
  //   }
  // };

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

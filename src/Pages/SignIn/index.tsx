import React, { FormEvent, useState, useEffect, useReducer } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "react-query";
import SignInCarousel from "./SignInCarousel";
import {
  Container,
  SignInBlock,
  Back,
  InputBlock,
  StyledGoogleButton,
} from "./StylesForSignIn/styles";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../useReducer/authslice";

type SignInFormData = {
  email: string;
  password: string;
};

interface SignInState {
  redirectToHome: boolean;
}

const initialState: SignInState = {
  redirectToHome: false,
};

const signInReducer = (
  state: SignInState,
  action: { type: string; payload?: any }
) => {
  switch (action.type) {
    case "SET_REDIRECT_TO_HOME":
      return { ...state, redirectToHome: action.payload };
    default:
      return state;
  }
};

const signInFn = async (formData: SignInFormData) => {
  try {
    const response = await axios.post(
      "https://icare-api-3zia.onrender.com/api/auth/login",
      formData
    );

    if (!response.data.token) {
      throw new Error("Token not received from the server");
    }

    return response.data.token;
  } catch (error: any) {
    throw new Error(`Error signing in: ${error.message}`);
  }
};

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, dispatchSignIn] = useReducer(signInReducer, initialState);

  const mutation = useMutation(
    (formData: SignInFormData) => signInFn(formData),
    {
      onSuccess: (token: string) => {
        dispatch(setToken(token));
        dispatchSignIn({ type: "SET_REDIRECT_TO_HOME", payload: true });
      },
      onError: (error: Error) => {
        console.error(error.message);
      },
    }
  );

  useEffect(() => {
    if (state.redirectToHome && !mutation.isLoading && !mutation.isError) {
      navigate("/main-home-page");
    }
  }, [state.redirectToHome, mutation.isLoading, mutation.isError, navigate]);

  const handleEmailSignIn = async (e: FormEvent) => {
    e.preventDefault();

    const formData: SignInFormData = {
      email: "sanjarbekweb@gmail.com",
      password: "123456",
    };

    mutation.mutate(formData);
  };

  return (
    <Container>
      <Back>
        <SignInBlock>
          <InputBlock>
            <NavLink to="/">
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
              <button type="submit" disabled={mutation.isLoading}>
                {mutation.isLoading ? "Signing In..." : "Sign In"}
              </button>
            </form>
            <h3>Or</h3>
            <StyledGoogleButton />
          </InputBlock>
          <SignInCarousel />
        </SignInBlock>
      </Back>
    </Container>
  );
};

export default SignIn;

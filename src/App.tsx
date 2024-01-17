import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider, useDispatch, useSelector } from "react-redux";
import { setToken } from "./useReducer/authslice";
import store, { RootState } from "./useReducer/store";
import SignIn from "./Pages/SignIn";
import { MainHomePage } from "./Pages/MainHomePage/MainHomeStyles";
import HomePage from "./components/HomePage";
import { CalendarComponent } from "./Pages/MainHomePage/Calendar/CalendarComponent";

const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch();

  const storedToken = localStorage.getItem("authToken");

  if (storedToken) {
    dispatch(setToken(storedToken));
  }

  const token = useSelector((state: RootState) => state.auth.token);
  const isUserAuthenticated = !!token;

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/sign-in"
                element={
                  isUserAuthenticated ? (
                    <Navigate to="/main-home-page" />
                  ) : (
                    <SignIn />
                  )
                }
              />
              <Route
                path="/main-home-page"
                element={
                  isUserAuthenticated ? (
                    <MainHomePage />
                  ) : (
                    <Navigate to="/sign-in" />
                  )
                }
              />
              <Route
                path="/calendar"
                element={
                  isUserAuthenticated ? (
                    <CalendarComponent />
                  ) : (
                    <Navigate to="/sign-in" />
                  )
                }
              />
            </Routes>
          </Router>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;

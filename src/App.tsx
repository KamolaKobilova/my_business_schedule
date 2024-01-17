import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Navigate } from "react-router-dom";

import SignIn from "./Pages/SignIn";
import { MainHomePage } from "./Pages/MainHomePage/MainHomeStyles";
import HomePage from "./components/HomePage";
import { CalendarComponent } from "./Pages/MainHomePage/Calendar/CalendarComponent";
import { Provider, useSelector } from "react-redux";
import store from "./useReducer/store";
import { RootState } from "./useReducer/store";

const queryClient = new QueryClient();

function App() {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/sign-in"
                element={token ? <Navigate to="/main-home-page" /> : <SignIn />}
              />
              <Route
                path="/main-home-page"
                element={token ? <MainHomePage /> : <Navigate to="/sign-in" />}
              />
              <Route
                path="/calendar"
                element={
                  token ? <CalendarComponent /> : <Navigate to="/sign-in" />
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

import SignUpForm from "./Pages/SignUp/SignUpForm";
import { useSignInMutation } from "./features/apiSlice";
// import { useHook } from "./useHook";
import { HomePageNav } from "./Pages/MainHomePage/BookingModal/HomePageNav";

function App2() {
    return (
        <div>
            <HomePageNav/>
            {/* <SignUpForm></SignUpForm> */}
        </div>
    )
}

export default App2
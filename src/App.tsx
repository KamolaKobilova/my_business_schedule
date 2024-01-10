import HomePage from './components/HomePage/index'
import Navbar from "./components/Navbar/Navbar";
import { useFetchSchedules } from './hooks';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
} from "react-router-dom";

function App() {
  const { schedules, loading } = useFetchSchedules();

  return (
    <>
  <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

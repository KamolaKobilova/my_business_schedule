import HomePage from './components/HomePage'
import Navbar from "./components/Navbar";
import { useFetchSchedules } from './hooks';

function App() {
  const { schedules, loading } = useFetchSchedules();

  return (
    <>
      <Navbar />
      <HomePage/>
    </>
  );
}

export default App;

import './App.css';
import Home from './Components/Home/Home';
import Navbar from "./Components/Navbar/Navbar.jsx";
import State from './Context/State';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <State>
        <Router>
            <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </State>
    </>
  );
}

export default App;

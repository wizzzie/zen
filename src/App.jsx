import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swap/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;

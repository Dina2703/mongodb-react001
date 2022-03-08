import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"></Route>
        <Route path="/notes"></Route>
        <Route path="/create"></Route>
      </Routes>
    </Router>
  );
}

export default App;

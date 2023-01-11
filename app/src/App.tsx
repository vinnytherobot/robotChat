import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import CreatePost from "./components/pages/CreatePost";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/createpost" element={<CreatePost/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

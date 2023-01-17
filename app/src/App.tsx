import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import CreatePost from "./components/pages/CreatePost";
import EditPost from "./components/pages/EditPost";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import MyProfile from "./components/pages/MyProfile";
import Profile from "./components/pages/Profile";
import SearchProfile from "./components/pages/SearchProfile";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/createpost" element={<CreatePost/>}></Route>
        <Route path="/search" element={<SearchProfile/>}></Route>
        <Route path="/myprofile" element={<MyProfile/>}></Route>
        <Route path="/profile/:id" element={<Profile/>}></Route>
        <Route path="/editpost/:id" element={<EditPost/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

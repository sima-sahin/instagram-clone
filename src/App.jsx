import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Profile from './pages/Profile';


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:username" element={<Profile />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import { Navbar } from "./components/Navbar";
import { LoginRegister } from "./components/LoginRegister/LoginRegister";
import Books from "./components/body/books/Books";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loginSignup" element={<LoginRegister />} />
          <Route path="/books" element={<Books/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

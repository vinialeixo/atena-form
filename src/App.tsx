import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Login/LoginPage";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
    </Routes>
  );
}

export default App;

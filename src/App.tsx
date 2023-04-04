import LoginPage from "./Page/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import DashboardPage from "./DashboardPage";

function App() {
  return (
    <Routes>
      {/* <Route></Route> */}
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const logout = () => {

  localStorage.removeItem("token");

  window.location.href = "/";

  };

  return (
    <BrowserRouter>

      <div>

        <nav>

          <Link to="/">Login</Link>

          {" | "}

          <Link to="/register">Register</Link>

          {" | "}

          <button onClick={logout}>
            Logout
          </button>

        </nav>

        <hr />

        <Routes>

          <Route
            path="/"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
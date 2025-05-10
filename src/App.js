import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <NavLink to="/" className="nav-link">
            Hem
          </NavLink>
          <NavLink to="/about" className="nav-link">
            Om oss
          </NavLink>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/products/:productId" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

//  <NavLink
//           to="/about"
//           style={({ isActive }) => ({
//             fontWeight: isActive ? "bold" : "normal",
//           })}
//         >

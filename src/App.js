import "./App.css";
import { Link, NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <section className="logoSection">
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjd4v7Hm-xkJAiDgqgftQIUj3paIn2H1rLCw&usqp=CAU"
              alt="logo"
            />
          </Link>
          <ul>
            <li>
              <NavLink
                to="/React"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Why React?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Components"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/DomTree"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                DOM Tree
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Hooks"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Hooks
              </NavLink>
            </li>
          </ul>
        </section>
        <section className="signin">
          <Link to="/signIn">
            <div className="sign">Sign In</div>
          </Link>
          <Link to="/signUp">
            <button>GET STARTED</button>
          </Link>
        </section>
      </header>
      <Outlet />
    </div>
  );
}

export default App;

import "./App.css";
import Content from "./Content";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <section className="logoSection">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjd4v7Hm-xkJAiDgqgftQIUj3paIn2H1rLCw&usqp=CAU"
            alt="logo"
          />
          <ul>
            <li>Why React?</li>
            <li>Components</li>
            <li>DOM Tree</li>
            <li>Hooks</li>
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
      <Content />
    </div>
  );
}

export default App;

import "./App.css";
import Content from "./Content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          <div className="sign">Sign In</div>
          <button>GET STARTED</button>
        </section>
      </header>
      <Content />
    </div>
  );
}

export default App;

import { Link } from "react-router-dom";
import "./Content.css";

function Content() {
  return (
    <section className="section">
      <div className="div1">
        <img
          className="image"
          src="data:image/jpeg;base64,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"
          alt="Learner"
        />
      </div>
      <div className="div2">
        <h1>What is React JS?</h1>
        <p>
          React (also known as React.js or ReactJS) is a free and open-source
          front-end JavaScript library for building user interfaces based on UI
          components. It is maintained by Meta (formerly Facebook) and a
          community of individual developers and companies. React can be used as
          a base in the development of single-page or mobile applications.
          However, React is only concerned with state management and rendering
          that state to the DOM, so creating React applications usually requires
          the use of additional libraries for routing, as well as certain
          client-side functionality.
        </p>
        <div className="input">
          <input type="email" placeholder="Email address" />
          <Link to="/signUp">
            <button className="started">START LEARNING</button>
          </Link>
        </div>
        <div className="signIn">
          Already a User?{" "}
          <span>
            <Link to="/signIn">Sign In</Link>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Content;

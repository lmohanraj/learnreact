import { useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  let navigate = useNavigate();
  return (
    <section className="section">
      <div className="title">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjd4v7Hm-xkJAiDgqgftQIUj3paIn2H1rLCw&usqp=CAU"
          alt="logo"
          className="logoImage"
        />
        <h2 className="React">Learn React</h2>
      </div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          navigate(`/home`);
        }}
      >
        <div className="inputs">
          <label for="name">Username</label>
          <input
            type="email"
            placeholder="Email"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="inputs">
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            required
          />
        </div>
        <button className="submitSignIn" type="submit">
          SignIn
        </button>
      </form>
    </section>
  );
}

export default SignIn;

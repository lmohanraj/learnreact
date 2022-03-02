import { useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  let navigate = useNavigate();
  return (
    <section>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          navigate(`/home`);
        }}
      >
        <div className="inputs">
          <label for="name">Username</label>
          <input type="email" placeholder="Email" id="name" name="name" />
        </div>
        <div className="inputs">
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
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

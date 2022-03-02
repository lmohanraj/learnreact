import "./SignIn.css";

function SignIn() {
  return (
    <section>
      <form onSubmit={(evt) => evt.preventDefault()}>
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

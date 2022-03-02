import "./SignUp.css";

function SignUp() {
  return (
    <section>
      <form onSubmit={(evt) => evt.preventDefault()}>
        <div className="inputs">
          <label for="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            name="name"
          />
        </div>
        <div className="inputs">
          <label for="email">Email</label>
          <input type="email" placeholder="Email" id="email" name="email" />
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
        <div className="inputs">
          <label for="cpassword">Confirm Password</label>
          <input
            type="password"
            placeholder="Password"
            id="cpassword"
            name="cpassword"
          />
        </div>
        <button className="submitSignIn" type="submit">
          SignUp
        </button>
      </form>
    </section>
  );
}

export default SignUp;

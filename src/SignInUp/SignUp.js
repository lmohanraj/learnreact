import "./SignUp.css";

function SignUp() {
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
      <form onSubmit={(evt) => evt.preventDefault()}>
        <div className="inputs">
          <label for="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="inputs">
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
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
        <div className="inputs">
          <label for="cpassword">Confirm Password</label>
          <input
            type="password"
            placeholder="Password"
            id="cpassword"
            name="cpassword"
            required
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

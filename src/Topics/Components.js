import "./Components.css";

function Components() {
  return (
    <>
      <h1>Components and Props</h1>
      <img
        className="picture"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNWELQDFuDzKcrBjpmuSPBEhqe3FDyfYhoLQ&usqp=CAU"
        alt="components"
      />
      <p>
        Components let you split the UI into independent, reusable pieces, and
        think about each piece in isolation. This page provides an introduction
        to the idea of components.
      </p>
      <h2>Function and Class Components</h2>
      <p>
        The simplest way to define a component is to write a JavaScript
        function:
      </p>
      <p>
        This function is a valid React component because it accepts a single
        “props” (which stands for properties) object argument with data and
        returns a React element. We call such components “function components”
        because they are literally JavaScript functions.
      </p>
      <p>You can also use an ES6 class to define a component:</p>
    </>
  );
}

export default Components;

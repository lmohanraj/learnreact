function Hooks() {
  return (
    <>
      <h1>React Hooks</h1>
      <p>
        Hooks are the new feature introduced in the React 16.8 version. It
        allows you to use state and other React features without writing a
        class. Hooks are the functions which "hook into" React state and
        lifecycle features from function components. It does not work inside
        classes.
      </p>
      <img
        style={{ width: "300px", height: "auto" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRZ-JyfX2k5o3de2AbefqWEIfcmsN9SpW0g&usqp=CAU"
        alt="hooks"
      />
      <h1>When to use hooks?</h1>
      <p>
        If you write a function component, and then you want to add some state
        to it, previously you do this by converting it to a class. But, now you
        can do it by using a Hook inside the existing function component.
      </p>
    </>
  );
}

export default Hooks;

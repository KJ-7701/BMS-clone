// // HOOKS --> provide power to Functional Components
// // SYNTAX --> ALL HOOKS start with "use", even the custom-made hooks

import React, { useState, useEffect } from "react";

const User2 = (props) => {
  const [age, setAge] = useState(12);
  // //1
  // setAge(16); //Changing the State
  // console.log(age); // Provide an ARRAY: (VALUE, function to update it)

  // // 2
  // componentDidMount
  useEffect(() => {
    console.log("Component Mounting");

    //componentWillUnMount
    return console.log("Goodbye!!");
  }, []);

  // componentDidUpdate and also works as shouldComponentUpdate
  useEffect(() => {
    console.log("Age changed");
  }, [age]);

  return (
    <div>
      <h1>{props.name}</h1>
      <h4>{props.description}</h4>
      <button onClick={() => setAge(16)}>{age}</button>
    </div>
  );
};

export default User2;

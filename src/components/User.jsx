// // //import React from "react";
// // 1
// const User = (props) => {
//     return (
//         <div>
//             <h1>
//                 {props.name}
//             </h1>
//             <h4>{props.description}</h4>
//         </div>
//     );
// };

// export default User;

// // PROPS => Properties/Parameters
// // STATE --> It is UNIQUE to its COMPONENT. NO other component can access it. It is an object of a set of observable properties that control the behavior of the component.

// // 2


// class User extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       age: 16,
//     };
//     console.log("Hey!! I'm from Constructor");
//   }

//   componentDidMount() {
//     console.log("Hey!! I'm from ComponentDidMount");
//     this.setState({ age: 14 });
//   }

//   shouldComponentUpdate(nextProp, nextState) {
//     console.log("From Should Component update");
//     console.log({
//       nextProp,
//       nextState,
//     });
//     return true;
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log("From get snapshot before Update");
//     console.log({
//       prevProps,
//       prevState,
//     });
//     return true;
//   }

//   componentDidUpdate() {
//     console.log("From Component Did Update");
//     console.log(this.state);
//   }

//   render() {
//     // Takes care of rendering and combining components
//     console.log("Hey!! I'm from render");
//     return (
//       <div>
//         <h1>{this.props.name}</h1>
//         <p>{this.props.description}</p>
//         <h3>{this.state.age}</h3>
//       </div>
//     );
//   }
// }

// export default User;

// // Component Life-Cycle method

// Mount   --> Component is initially rendered
// Updated --> Component is being Updated
// UnMount --> Component is removed from DOM
// componentDidMount --> A method which is executed at initial render

// // // PROCESS

// // MOUNTING
// Constructor
// Render
// componentDidMount

// // UPDATING
// Constructor
// shouldComponentUpdate(nextProp, nextState) --> returns a BOOLEAN
// Render()
// getSnapshotBeforeUpdate(prevProps, prevState) --> returns a BOOLEAN
// componentDidUpdate()

// // UNMOUNTING
// componentWillUnMount() --> Execute react code when component is deleted/Unmounted from DOM
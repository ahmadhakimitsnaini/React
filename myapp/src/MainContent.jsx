import { StrictMode, useEffect, useState } from "react";
import "./index.css";

//  A Todo App
// function MainContent() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");
//   const addTodo = () => {
//     if (input.trim()) {
//       setTodos([...todos, input]);
//       setInput(input);
//     }
//   };
//   const removeTodo = (indexToRemove) => {
//     setTodos(todos.filter((_, index) => index !== indexToRemove));
//   };
//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         value={input}
//         placeholder="Add a new task"
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={addTodo}>Add Todo</button>

//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo} <button onClick={() => removeTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// Current Seconds
// function MainContent() {
//   const [seconds, setSeconds] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);
//   return <h1>Current Seconds is {seconds}</h1>;
// }

export default MainContent;

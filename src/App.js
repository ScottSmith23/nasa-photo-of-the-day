import React from "react";
import "./App.css";
import MainComp from "./components/mainComp";
// function App() {
//   return (
//     <div className="App">
//       <p>
//         Read through the instructions in the README.md file to build your NASA
//         app! Have fun 🚀!
//       </p>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      <h1>NASA</h1>
      <h2>Astronomy Picture of the Day</h2>
    <MainComp />
    </div>
  );
}

export default App;

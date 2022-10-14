import { Route, Routes } from "react-router-dom";
import  Home  from "./components/Home"

function App() {
  return (
    <div id="appDiv">
      {/* <Routes>
        <Route path="/" element={<Home />}/>
      </Routes> */}
    <h1>Hello World</h1>
    <Home />
    </div>
  );
}

export default App;
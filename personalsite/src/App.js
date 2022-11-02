import { Route, Routes } from "react-router-dom";
import  Home  from "./Components/Home"
import  AboutMe  from "./Components/AboutMe"
import  Portfolio  from "./Components/Portfolio"


function App() {
  return (
    <div id="appDiv"> 
      <Routes>
       <Route path="/" element={<Home />}></Route>
       <Route path="/AboutMe" element={<AboutMe />}></Route>
       <Route path="/Portfolio" element={<Portfolio />}></Route>
      </Routes>
      <h5>this is the app</h5>
    </div>
  );
}

export default App;
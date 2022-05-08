import { Route, Routes } from "react-router-dom";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home";



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;

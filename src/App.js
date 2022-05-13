import { Route, Routes } from "react-router-dom";
import AddItem from "./components/AddItem/AddItem";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home";
import InventoryIdItem from "./components/InventoryIdItem/InventoryIdItem";
import Login from "./components/Login/Login";
import ManageItems from "./components/ManageItems/ManageItems";
import MyItem from "./components/MyItem/MyItem";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/inventory/:id" element={
          <RequireAuth>
            <InventoryIdItem></InventoryIdItem>
          </RequireAuth>
        }></Route>
        <Route path="/additem" element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path="/manageitems" element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
      <Route path="/myitems" element={
        <RequireAuth>
          <MyItem></MyItem>
        </RequireAuth>
      }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

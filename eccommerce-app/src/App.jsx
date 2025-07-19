import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes> */}
    </>
  );
}

export default App;
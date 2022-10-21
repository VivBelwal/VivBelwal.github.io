import { Routes, Route } from "react-router-dom";
import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import Users from "./Users";




function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
 
    
      {/* <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route> */}
     
     
    </Routes>
  );
}

export default AllRoutes;

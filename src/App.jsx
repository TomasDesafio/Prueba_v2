import Home from "./views/Home";
import "./App.css";
import  ApiProvider  from "./context/ApiContext";
import Pizzas from "./views/Pizzas";
import { Navigate, Route, Routes } from "react-router-dom";
import Carrito from "./views/Carrito";
import Navbar from "./components/Narbar";

function App() {
  return (
    <>
            <Navbar/>
              <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/pizzas/:id"
                element={<Pizzas/>}
              />
              <Route
                path="/carrito"
                element={<Carrito/>}
              />
 
          </Routes>
        
        
      
            
        
      
    </>
  );
}

export default App;



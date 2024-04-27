import { NavLink } from "react-router-dom";
import { CarritoContext } from '../context/CarritoContext';
import { useContext } from 'react';

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  const {carrito,setCarrito,total, setTotal} = useContext(CarritoContext);

  return (
    <div>
      <nav>
        <NavLink
          className={setActiveClass}
          to="/"
        >
          {" "}
          Home{" "}
        </NavLink>

        <NavLink
          className={setActiveClass}
          to="/pizzas"
        >
          {" "}
          Pizzas{" "}
        </NavLink>

        <NavLink
          className={setActiveClass}
          to="/carrito"
        >
          {" "}
          Carrito{" "}
        </NavLink>

        {total}

        

      
      </nav>
    </div>
  );
};
export default Navbar;

import { useState, useEffect, createContext } from "react";


export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState();


    
  

  return (
    <CarritoContext.Provider value={{carrito,setCarrito,total,setTotal}}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
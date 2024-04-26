import { useState, useEffect, createContext } from "react";


export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);


    
  

  return (
    <CarritoContext.Provider value={{carrito,setCarrito}}>
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
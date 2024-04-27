import { useState, useEffect, createContext } from "react";
import pizzasData from "../data/pizzas.json";

export const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("probanado data dedee pizzas.json:", pizzasData);
        setPizzas(pizzasData);
      } catch (error) {
        console.error("errror  data de pizzas.json:", error);
      }
    };

    fetchData();
  }, []);

  console.log("pizzas!!!!!:", pizzas); 

  return (
    <ApiContext.Provider value={pizzas}>
      {children}
    </ApiContext.Provider>
  );
};

export default ApiProvider;

import { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';
import { CarritoContext } from '../context/CarritoContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";



const Home = () => {

  const pizzas = useContext(ApiContext);
  const {carrito,setCarrito,total, setTotal} = useContext(CarritoContext);
  const navigate= useNavigate()
  console.log(carrito)
  


  const handleSubmit=(id) =>{
  
    navigate(`/pizzas/${id}`)
  }

  const Agregaralcarrito=(id) =>{
    setCarrito([...carrito,id])
    navigate(`/carrito`)
  
  }

  console.log(pizzas)

  
 
    return (
      
        <div className="photo-gallery">
        {pizzas.map((pizza, index) => (
          <div key={index} className="photo">
            <img src={pizza.img} alt={pizza.name} />
            <h4> {pizza.name}</h4>
            <h5>Ingredientes:</h5>
            <ul className="unordered-list">
              <p  className="list-item"> {pizza.ingredients[0]}  </p>
              <p  className="list-item"> {pizza.ingredients[1]}  </p>
              <p  className="list-item"> {pizza.ingredients[2]}  </p>
              <p className="list-item"> {pizza.ingredients[3]}  </p>
            </ul>
            <h3>${pizza.price}</h3>
            <button onClick={() => handleSubmit(pizza.name)}> Ver mas </button>
            <button onClick={() => Agregaralcarrito(pizza)}> Añadir al carrito </button>



          </div>
        ))}
        <p>Total:{total}</p>
      </div>
      
      );
      
        
    
     


    
  
    

}

export default Home;


import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { ApiContext } from '../context/ApiContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CarritoContext } from '../context/CarritoContext';
import { useNavigate } from "react-router-dom";



export default function Pizzas() {
    const{id}=useParams()
    const pizzas = useContext(ApiContext);
    const {carrito,setCarrito,total, setTotal} = useContext(CarritoContext);
    const navigate= useNavigate()
    const pizza_escogida = pizzas.find((element) => element.name === id);

    const Agregaralcarrito=(id) =>{
        setCarrito([...carrito,id])
        navigate(`/carrito`)
      
      }





  return (
    <div className="contenedor_pizzas">
      <img src={pizza_escogida.img} alt={pizza_escogida.name}></img>
      <div>
        <h2>{pizza_escogida.name}</h2>
        <p>{pizza_escogida.desc}</p>
        <h3>Ingredientes</h3>
          <p>{pizza_escogida.ingredients[0]}</p>
          <p>{pizza_escogida.ingredients[1]}</p>
          <p>{pizza_escogida.ingredients[2]}</p>
          <p>{pizza_escogida.ingredients[3]}</p>
          <div >
            <h4>${pizza_escogida.price}</h4>
            <button variant="primary" onClick={() => Agregaralcarrito(pizza_escogida)}>Añadir al Carrito</button>
          </div>
      </div>
          
        
    </div>
  )
}


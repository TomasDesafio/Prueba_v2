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
    const {carrito,setCarrito} = useContext(CarritoContext);
    const navigate= useNavigate()
    const pizza_escogida = pizzas.find((element) => element.name === id);

    const Agregaralcarrito=(id) =>{
        setCarrito([...carrito,id])
        navigate(`/carrito`)
      
      }





  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pizza_escogida.img} />
      <Card.Body>
        <Card.Title>{pizza_escogida.name}</Card.Title>
        <Card.Text>
          {pizza_escogida.desc}
        </Card.Text>
        <Button variant="primary" onClick={() => Agregaralcarrito(pizza_escogida.id)} >Añadir al Carrito</Button>
      </Card.Body>
    </Card>

    </div>
  )
}


import React from 'react'
import { useContext } from 'react';
import { ApiContext } from '../context/ApiContext';
import { CarritoContext } from '../context/CarritoContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";



export default function Carrito() {
    const pizzas = useContext(ApiContext);
    const {carrito,setCarrito} = useContext(CarritoContext);
    const navigate= useNavigate()

    function contarObjetosRepetidos(arr) {
        const contador = {};
      
        // Iterar sobre el arreglo y contar los objetos
        arr.forEach(objeto => {
          const clave = JSON.stringify(objeto);
          if (contador[clave]) {
            contador[clave]++;
          } else {
            contador[clave] = 1;
          }
        });
      
        



        return contador;      
      }
      
        console.log(carrito)

        const resultado = contarObjetosRepetidos(carrito)

        console.log(resultado)


  return (
    <div>
      
    </div>
  )
}

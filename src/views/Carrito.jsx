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
import { useState, useEffect, createContext } from "react";



export default function Carrito() {
    const pizzas = useContext(ApiContext);
    const {carrito,setCarrito,total, setTotal} = useContext(CarritoContext);
    const [resulta, setResulta] = useState([]);
    const navigate= useNavigate()
    

    const eliminar = (id) => {
      const pizzaeliminada=carrito.find((pizza) =>pizza.id === id);
      
      console.log(pizzaeliminada.name)
      var indice = carrito.indexOf(pizzaeliminada); // obtenemos el indice
      //console.log(indice)
      //console.log(carrito)
      var carrito_nuevo=carrito.splice(indice, 1); // 1 es la cantidad de elemento a eliminar
      //const nuevoArreglo = carrito.filter(objeto => objeto !== imageneliminada);
      //console.log(carrito_nuevo)
      //console.log(carrito)
      var f=calcularFrecuencia(carrito)
      var pedido=calcularTotalPedido(f)

       
     
      setCarrito(carrito);
      setResulta(f)
      setTotal(pedido)
      console.log(carrito)
    };

    const agregar = (id) => {
      //e.preventDefault();
      const imagenfavorita=pizzas.find((photo) =>photo.id === id);
      setCarrito([...carrito, imagenfavorita]);
      var f=calcularFrecuencia(carrito)
     
      var pedido=calcularTotalPedido(f)
      setResulta(f)
      setTotal(pedido)
      
      
      //setLike('true')
      
    
    };


    

    function calcularFrecuencia(arreglo) {
      // Creamos un objeto para almacenar la frecuencia de cada objeto en el arreglo
      let frecuencia = {};
  
      // Recorremos el arreglo y contamos la frecuencia de cada objeto
      arreglo.forEach(objeto => {
          // Convertimos el objeto a una cadena JSON para usarlo como clave en el objeto de frecuencia
          let clave = JSON.stringify(objeto);
          frecuencia[clave] = (frecuencia[clave] || 0) + 1;
      });
  
      // Creamos un nuevo arreglo para almacenar los objetos con su frecuencia
      let resultado = [];
  
      // Recorremos el objeto de frecuencia y creamos los objetos para el resultado
      for (let clave in frecuencia) {
          if (frecuencia.hasOwnProperty(clave)) {
              // Convertimos la clave nuevamente a objeto
              let objeto = JSON.parse(clave);
              // Añadimos la frecuencia al objeto
              objeto.frecuencia = frecuencia[clave];
              // Añadimos el objeto al resultado
              resultado.push(objeto);
          }
      }
  
      return resultado;
  }
  
  let resultado = calcularFrecuencia(carrito);
  console.log(resultado);

  // Función para calcular el total del pedido
function calcularTotalPedido(carrito) {
  let total = 0;
  for (let producto of carrito) {
      total += producto.price * producto.frecuencia;
  }
  return total;
}
  calcularTotalPedido(resultado)
 setTotal(calcularTotalPedido(resultado)
)
  

  

    


        return (
      
          <div>
            <h2>Detalle del pedido</h2>
            {resultado.map((pizza, index) => (
              <div key={index} className="contenedor_carrito">
                <div className="contenedor_carritointerior">
                  <img src={pizza.img} alt={pizza.name} />
                  <h4> {pizza.name}</h4>
                  <h3> Total:${pizza.price*pizza.frecuencia}</h3>
                  <button onClick={() =>eliminar(pizza.id)}>-</button> 
                  <h3> Cantidad: {pizza.frecuencia}</h3>
                  <button onClick={() =>agregar(pizza.id)}>+</button> 
              
                  
                </div>
      
  
              </div>
            
          ))}
           <h2>Total a pagar:{total}</h2>
           <button>Pagar</button>  
        </div>
        
        );       


  
}

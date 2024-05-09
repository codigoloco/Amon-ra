import React from 'react'

export const List_prod = () => {
const AgregarProducto = (val) => {
    carrito.push(val)
    console.log(carrito)
const handleSearchAndRemove = (val) => {
      let foundNumber = carrito.find(number => number === val);
      if (foundNumber) {
          const indexToRemove = carrito.indexOf(foundNumber)
          if (indexToRemove !== -1) {
              carrito.splice(indexToRemove, 1);
             
          }
          console.log(carrito);
      } else {
          console.log('El número no está en el array');
      }
      // val = val.filter(val => val.toLowerCase() !== searchTerm.toLowerCase());
      // setFilteredFruits(val);
  };
    
}
  return (
    <div>List_prod</div>
  )
}

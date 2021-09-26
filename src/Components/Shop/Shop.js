import React, { useEffect, useState } from 'react';

import './Shop.css'
import Character from './../Characters/Character';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [characters, setCharacters]=useState([]);
    const[cart,setCart]=useState([])
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res=>res.json())
        .then(data=>setCharacters(data))
    },[])
    const handleAddToCart=(character)=>{
       const newCart=[...cart,character];
       setCart(newCart);

    }
    return (
        <div className="shop-container">
           <div className="product-container">

              {
                    characters.map(character=><Character 
                        key={character.Character_name}
                        character={character}
                        handleAddToCart={handleAddToCart}
                    ></Character>)
              }

           </div>
           <div className="cart-container">
              <Cart 
              cart={cart}
              
              ></Cart>
              
             
           </div>
        </div>
    );
};

export default Shop;
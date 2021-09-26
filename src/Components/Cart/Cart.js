import React from 'react';
import './Cart.css'
import Character from './../Characters/Character';

const Cart = (props) => {
    const {cart}=props;
    let total=0;
    for(const character of cart){
        total=total+character.cost;
    }
    return (
        <div className="order">
              <h2>Cart</h2>
               <h4>Character Added : {props.cart.length}</h4>
               <p><span>Total Cost : $</span>
                   {total}</p>
                   <ul>{
                   cart.map(character=><li>{character.Character_name}</li>)}
                   </ul>
               
               <button>Buy Now</button>
               
        </div>
    );
};

export default Cart;

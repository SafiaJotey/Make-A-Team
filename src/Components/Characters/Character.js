import React from 'react';
import "./Character.css"

const Character = (prop) => {
    console.log(prop);
    const {Character_name,img,Created,from,Creators,cost}=prop.character;
    return (
        <div className="card">
            <img className="card-image" src={img} alt="" />

            <h3>CharacterName: {Character_name}</h3>
            <p>From: {from}</p>
            <h4>Created By: {Creators}</h4>
            <h5>Year:{Created}</h5>
            <p>Cost: {cost}</p>
            <button onClick={()=>
            prop.handleAddToCart(prop.character)
            }><i class="fas fa-shopping-cart"></i> Add To Cart</button>


        </div>
    );
};

export default Character;
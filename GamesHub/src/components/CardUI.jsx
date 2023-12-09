import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { auth} from '../firebase/firebase';
import { db } from '../firebase';


const CardUI = props => {

    var [favoritesObject, setFavoritesObject] = useState({});
    
    
    
    
    
    
    function addToShoppingCart()  {
        console.log(props);

        return new Promise(async (resolve, reject) => {
            await db.addToShoppingCart(auth.currentUser.uid, props.card, props.userDetails );

            
            resolve();
 
        }); 
        
           
        
        
    }
    
    function deleteFromShoppingCart(id){
        console.log(id)
        return new Promise(async (resolve, reject) => {
            
            const newValues = await db.updateFavorites(auth.currentUser.uid, props.userDetails, id)
                        
           resolve(newValues);
           }).then((e)=>{
            window.location.href = '';
            props.updateFavoritesObject(e);
           }
           )
    }

    return (
        
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.image} alt="image1" className="card-img-top"/>
            </div>
          <div className="card-body text-dark">
           <h4 className="card-title">{props.title}</h4>
           {
            props.isCategories ?
            <div className='d-flex justify-content-around'>
           <Link className="btn btn-outline-primary" to={{pathname:'/card/' + props.cardId, card: props.card, userDetails: props.userDetails}}>
            more details
           </Link>
           </div>
           :
           <div>

           
            {props.inShoppingCart ?<div><Button onClick={() => deleteFromShoppingCart(props.card.id)}>Delete from Shopping cart</Button>             <Link className="btn btn-outline-primary" to={{pathname:'/card/' + props.cardId, card: props.card, userDetails: props.userDetails, isForGame: true}}>
            more details
           </Link>
           <p>Price : {props.card.price}₪</p>
            </div> :
           <div>
            
            <Button onClick={addToShoppingCart}>Add To Shopping cart</Button>
           <p>Price : {props.card.price}₪</p></div>
           }
           </div>
           }
           
          </div>
        </div>
    )
}

export default CardUI;

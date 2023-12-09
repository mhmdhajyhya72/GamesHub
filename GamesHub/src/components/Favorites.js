import React , { Component } from 'react';
import Navigation from "./Navigation";
import Jumbo from "./Jumbo";
import Footer from "./Footer";
import Cards from "./Cards";
import { auth, db } from '../firebase/firebase';
import { Button } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import * as routes from "../constants/routes";
import { Link } from "react-router-dom";






const INITIAL_STATE = {
  isMoviesPage: true,
  userDetails: null
};




class Landing extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
      history: props.history
    };
 }
 
 
 componentWillMount() {
  if(auth.currentUser !== null){
    return new Promise(async (resolve, reject) => {
            
      await db.ref('users/' + auth.currentUser?.uid).once('value').then((snapshot) => {
        if (snapshot) {
          let lastPrice = getLastPrice(snapshot.val());
          this.setState({userDetails: snapshot.val(),lastPrice: lastPrice});
        }
      }).catch( e => {
        alert(e.message);
      })
                  


     resolve();
     })    
  }
  
  function getLastPrice(userDetails){
    
    let total = 0;
    let shoppingItems = userDetails.shoppingItems;
    for (let index = 0; index < shoppingItems.length; index++) {
      const element = shoppingItems[index];
      total += parseInt(element.price);
      
    }
    console.log(total);
    return total;
    
    
    
    
    
  }

}
  
   switchToMovies(){
    if(auth.currentUser !== null){
      return new Promise(async (resolve, reject) => {
              
        await db.ref('users/' + auth.currentUser?.uid).once('value').then((snapshot) => {
          if (snapshot) {
            this.setState({userDetails: snapshot.val()});
          }
        }).catch( e => {
          alert(e.message);
        })
                    
  
  
       resolve();
       })    
    }
  }
  
  
  render() {
    console.log(this.state.userDetails);
    return (
      <div className="App">
       <div>
          <Navigation />
          <div className="container"> 
              <Jumbo text={"your " + "Shoping Cart"}/>
          </div>
          <Button id='mybutton' onClick={() => this.switchToMovies()}> Refresh Shoping cart</Button>
          
          
          <div className="cards_together">
            {
              this.state.userDetails ?
              <Cards inShoppingCart = {true} isCategories = {false} results = {this.state.userDetails.shoppingItems} userDetails={this.state.userDetails} />
               : <p>No Items, try refresh the page</p>
               
          
           }
          </div>
          {this.state.userDetails ? 
          <Link className="btn btn-outline-primary" to={{pathname:'/payment' , gamesCount : this.state.userDetails.shoppingItems ? this.state.userDetails.shoppingItems.length : 0,lastPrice: this.state.lastPrice}}>
            MOVE TO CHECKOUT
           </Link>
           : 
           <div></div>}
           
          <Footer/>
        </div>
      </div>    
    );
  }
}
  
export default withRouter(Landing);

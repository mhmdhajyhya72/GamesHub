import React , { Component } from 'react';
import Navigation from "./Navigation";
import Jumbo from "./Jumbo";
import Footer from "./Footer";
import Cards from "./Cards";
import { auth, db } from '../firebase/firebase';


const INITIAL_STATE = {
  error: null,
  results: [],
  userDetails:{},
  data:{}
  
};




class Landing extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE
    };

 }
 
 

  
  componentWillMount() {
    
    const categories = [{
      id: 1,
      title: "shooter",
      Poster: "https://www.freetogame.com/g/380/thumbnail.jpg"
    },
    {
      id: 2,
      title: "sports",
      Poster: "https://www.freetogame.com/g/351/thumbnail.jpg"
    },
    {
      id: 3,
      title: "social",
      Poster: "https://www.freetogame.com/g/432/thumbnail.jpg"
    },
    {
      id: 4,
      title: "racing",
      Poster: "https://www.freetogame.com/g/351/thumbnail.jpg"
    },
    {
      id: 5,
      title: "sci-fi",
      Poster: "https://www.freetogame.com/g/429/thumbnail.jpg"
    },
    {
      id: 6,
      title: "fantasy",
      Poster: "https://www.freetogame.com/g/340/thumbnail.jpg"
    },
    {
      id: 7,
      title: "strategy",
      Poster: "https://www.freetogame.com/g/347/thumbnail.jpg"
    },
    {
      id: 8,
      title: "anime",
      Poster: "https://www.freetogame.com/g/348/thumbnail.jpg"
    },
    {
      id: 9,
      title: "mmorpg",
      Poster: "https://www.freetogame.com/g/380/thumbnail.jpg"
    },
  ];
    
    this.setState({
        results: categories
    });
    
    if(auth.currentUser != null){
      db.ref('users/' + auth.currentUser.uid).once('value').then((snapshot) => {
        if (snapshot) {
          this.setState({userDetails:snapshot.val()});
        }
      }).catch( e => {
        alert(e.message);
      })
    }

}

  // updateArray(newArray){
  //   this.setState({results: newArray})
  // }
  
  render() {
    return (
      <div className="App">
       <div>
          <Navigation />
          <div className="container"> 
              <Jumbo text="Games Hub"/>
          </div>
          
            <h4 className="card-title">
              Categories 
          </h4>
          <div className="cards_together">
              <Cards updateArray= {this.updateArray} userDetails = {this.state.userDetails} isCategories = {true} results = {this.state.results} />
          </div>
          <Footer/>
        </div>
      </div>    
    );
  }
}
  
export default Landing;

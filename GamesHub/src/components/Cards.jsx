import React, { Component } from 'react';
import Card from './CardUI';
import { Button,Form, InputGroup } from 'react-bootstrap';





class Cards extends Component{
 
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            results: props.results,
            // updateArray: props.updateArray()
            searchTerm: '',
            filteredItems: props.results,
        };
        this.updateFavoritesObject = this.updateFavoritesObject.bind(this);
        this.onSearchValue = this.onSearchValue.bind(this);
        console.log(props)


    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        // Compare the current searchTerm with the one in props
        if (nextProps.searchTerm !== prevState.searchTerm) {
          // If they are different, update the state
          return {
            searchTerm: nextProps.searchTerm,
            filteredItems: nextProps.results.filter(item =>
              item.title.toLowerCase().includes('')
            ),
          };
          
          
          
        }
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     if (prevState.results !== nextProps.results) {
    //       return { results: nextProps.results };
    //     }
      
    //     return null;
    // }
    updateFavoritesObject(value){
        this.setState(() => {
            // Important: read `state` instead of `this.state` when updating.
            return {results: value}
        });    
    }
    
    onSearchValue = async (e, props) =>{
        // implement caliing the api from this function 
        if(e){

            const items  = this.state.results;
            console.log(items, props);
            // Assuming 'items' is passed as a prop
            const filteredItems = items?.filter(item =>
              item.title.toLowerCase().includes(e.toLowerCase())
            );
            // this.state.updateArray(filteredItems);
            this.updateFavoritesObject(filteredItems);    
        }else{
            this.updateFavoritesObject(props.results);
        }
        
        
    }


    render(){
        return(
            <div className="container-fluid d-flex justify-content-center ">
               <div className="row">
               <InputGroup>
            <InputGroup.Prepend className="inputlabel">Search</InputGroup.Prepend>
              <Form.Control
                id="inputtext"
                type="search"
                name="search"
                placeholder=""
                // value={""}
                required
                onChange={e => this.onSearchValue(e.target.value,this.props)}
              />
            </InputGroup>
                    {
                        this.state.results?.map( oneCard => 
                            <div className="col-md-4 individual_card" >
                                <Card
                                    updateFavoritesObject = {this.updateFavoritesObject}
                                    userDetails = {this.props.userDetails}
                                    isCategories ={this.props.isCategories}
                                    inShoppingCart = {this.props.inShoppingCart}   
                                    key={oneCard.id} 
                                    cardId= {oneCard.title}
                                    image={this.props.isCategories ? new URL(oneCard.Poster != "" && oneCard.Poster != null && oneCard.Poster != undefined && oneCard.Poster != "N/A" ? oneCard.Poster : "https://source.unsplash.com/800x500") : new URL(oneCard.thumbnail != "" && oneCard.thumbnail != null && oneCard.thumbnail != undefined && oneCard.thumbnail != "N/A" ? oneCard.thumbnail : "https://source.unsplash.com/800x500")}
                                    title={oneCard.title}
                                    card = {oneCard}
                                    />
                            </div>)
                    
                   
                        
                    }
               </div>
            </div>
        );
    }
}

export default Cards;

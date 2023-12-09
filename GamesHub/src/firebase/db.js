import { db } from "./firebase";

//create an user and store it at users/id path (it's an asynchronous func)
export const doCreateUser = ( id, name, email,age ) =>{
   // problem here with creating a new user there is no default of favorites value 
  var shoppingItems = [];
  var movieFavorites = "", seriesFavorites = "";
  db.ref(`users/${id}`).set({
    name,
    email,
    age,
    shoppingItems
    
  })};

//returns all users from firebase realtime db
export const onceGetUsers = () => db.ref("users").once("value");
export const doGetAnUnser = uid => db.ref(`users/${uid}`).once("value");


export const updateFavorites = (userId, userData, favoriteToDeleteId) => {
  var newShoppingItems = [];
  
  
    if(userData){
      console.log("test inside", favoriteToDeleteId);
      for (let index = 0; index < userData.shoppingItems.length; index++) {
        const element = userData.shoppingItems[index];
          if(element.id !== favoriteToDeleteId) {
            newShoppingItems.push(element);
          }
      }
      console.log(newShoppingItems);
        db.ref(`users/${userId}`).update({
          shoppingItems : newShoppingItems.length == 0 ? [] : newShoppingItems
        })
    }  

    console.log("test from here")
    return newShoppingItems;
  
}


export const addToShoppingCart = ( id, game, userDetails) =>{
  
 
  
  var gamesArray = mergeOldAndNewFavorites(userDetails.shoppingItems, game);
  

  
    
  console.log(gamesArray);
  return db.ref(`users/${id}`).update({
          shoppingItems : gamesArray
  })

  
        
    
      // if(oldMovieFavorites !== ""){
      //   favoritesArray = mergeOldAndNewFavorites(oldMovieFavorites, favoriteSelectedData);
      // }else{
      //   favoritesArray[0] = favoriteSelectedData;
      // }
      // if(favoritesArray){
      //   db.ref(`users/${id}`).update({
      //     movieFavorites : favoritesArray
      //   })      }

      // if(oldSeriesFavorites !== ""){
      //   favoritesArray = mergeOldAndNewFavorites(oldSeriesFavorites, favoriteSelectedData);
      // }else{
      //   favoritesArray[0] = favoriteSelectedData;
      // }
      
      //    if(favoritesArray){
      //     db.ref(`users/${id}`).update({
      //       seriesFavorites : favoritesArray
      //     })
      //    }   

    
  
   
  function mergeOldAndNewFavorites(oldArray, newData){
    var dataExist = false;
    if(oldArray && oldArray.length != 0){
      for (let index = 0; index < oldArray.length; index++) {
        const element = oldArray[index];
        if(element.id == newData.id){
          dataExist = true;
        }
      }
      if(!dataExist){
        oldArray[oldArray.length] = newData;
        console.log("added to Your Shoping cart")
        alert(newData.title + " added to Your Shoping cart");
      }else{
        console.log("added the game more than one time in Shoping cart")
        alert(newData.Title +  " added the game more than one time in Shoping cart");
      }
    }else{
      oldArray = [newData];
      
    }
    
    
    return oldArray;
  }

  

};



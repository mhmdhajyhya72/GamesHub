import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import Navigation from "./Navigation";
function CreditCardUi(props) {
  const [gamesCount, setGamesCount] = useState(props.location.gamesCount);
  const [lastPrice, setLastPrice] = useState(props.location.lastPrice);
  console.log(gamesCount);
  const [payment, setPayment] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  });
  function handleCallback({ issuer }, isValid) {
    if (isValid) {
      setPayment({ issuer });
    }
  }
  function onInputFocus({ target }) {}
  function onInputUpdate({ target }) {
    console.log({ [target.name]: target.value });
  }
  function handleSubmit(e) {}
  const { name, number, expiry, cvc, focused, issuer } = payment;
  return (
    
    <div key="Payment">
      

      
      <div>
  
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={handleCallback}
          
        /><Navigation />
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3 mt-4">
          <div className="text-center">
        {gamesCount} Games in You Shopping Cart
        <br></br>
        Total :  {lastPrice}₪ 
      </div>
            <input
              type="tel"
              name="number"
              className="form-control"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              required
              onChange={onInputUpdate}
              onFocus={onInputFocus}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              
              required
              onChange={onInputUpdate}
              onFocus={onInputFocus}
            />
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <input
                type="tel"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru"
                pattern="\d\d/\d\d"
                required
                onChange={onInputUpdate}
                onFocus={onInputFocus}
              />
            </div>
            <div className="col-6">
              <input
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                pattern="\d{3,4}"
                required
                onChange={onInputUpdate}
                onFocus={onInputFocus}
              />
            </div>
          </div>
          <input type="hidden" name="issuer" value={issuer} />
          <div className="d-grid">
            <button className="btn btn-dark">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreditCardUi;
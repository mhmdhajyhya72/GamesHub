import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {Container } from "react-bootstrap";
import MainBanner from "./Banner";

import Footer from './Footer';
import Navigation from './Navigation';

const ContactUs= ({ history }) => (
  <div>
    <Navigation />
    <div className="div-flex" style={{marginTop: "110px"}}>
      <center>
        <ContactUS/>
      </center>
      <br/>
      <Footer />
    </div>
  </div>
);

//################### About Us Page ###################
const INITIAL_STATE = {
  name: "Ahmad Mhamid , Mohammed Haj Yahya",
  email: "mhameeedahmad@gmail.com , mhmd.14.hy@gmail.com",
  education: "Software Engineering",
  Address:"Tel Aviv , Hasholom 7A",
  WhatsApp: "+972-549355848 , +972-537286455"
  ,Since:"2023"
};

// TODO need to change Author details


class ContactUS extends Component {
  state = {
    ...INITIAL_STATE
  };



  render() {
    const {
      name,
      email,
      passwordOne,
      passwordTwo,
      age
    } = this.state;

    return (
      <div className="inputclass">
        <Container>
          <h2 id="mytexth2">Contact  Us</h2>
          
          <h5 id="mytexth5">Authors Email : {this.state.email}</h5>
          
          <h5 id="mytexth5">Address : {this.state.Address}</h5>
          <h5 id="mytexth5">WhatsApp : {this.state.WhatsApp}</h5>
          <h5 id="mytexth5">this Web Since : {this.state.Since}</h5>
          <h5 id="mytexth8">also you can find our social media pages by scroling down and click the icons</h5>
        <MainBanner />


        </Container>
      </div>
    );
  }
}

export default withRouter(ContactUs);
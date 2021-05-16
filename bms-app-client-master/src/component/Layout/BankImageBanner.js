import React from "react";
import bankImage from '../../assets/co-op-bank.jpg';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import '../../index.css';

const BankImageBanner = () => {
    return <div class="jumbotron">
    {} <div className="jumb-img">
    <img  src={bankImage} alt="banner"/>
    </div> 
  </div>
};

export default BankImageBanner;

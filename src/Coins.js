import React from "react";
import "./Coins.css";
import img from './coinicon.png'
const Coins = ({ name, image, symbol, price,per, volume,rank }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
        <p className="rank">#{rank}</p>   
          <img style={{marginLeft:"20px"}} src={img} alt="crypto" />
          <h1>{name}</h1>
          <button>buy</button>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          {/* <p className="coin-volume">${(volume / 10000 * 0.012).toFixed(2)}</p> */}
          <p className="coin-volume">${per}</p>
        </div>
        
      </div>
    </div>
  );
};
export default Coins;

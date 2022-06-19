import React from "react";
import "./Coins.css";
const Coins = ({ name, image, symbol, price,per, volume,rank }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
        <p className="rank">#{rank}</p>   
          <img style={{marginLeft:"20px"}} src={image} alt="crypto" />
          <h1>{name}</h1>
          <button>buy</button>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">₹{price}</p>
          {
            per < 0 ? (<p style={{color:"red"}}>{per.toFixed(2)}%</p>) : (<p style={{color:"green"}}>{per.toFixed(2)}%</p>)
          }
          <p className="coin-volume">₹{volume}</p>
        </div>
        
      </div>
    </div>
  );
};
export default Coins;

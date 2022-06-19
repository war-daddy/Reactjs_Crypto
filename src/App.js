import React, { useEffect, useState } from "react";
import axios from "axios";
import Coins from "./Coins";
import './App.css'
export default function App() {
  const [coins, setCoins] = useState([]);
  const [search,setSearch] = useState('');
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      }).catch(error => console.log(error))
  },[]);
    const filteredCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLocaleLowerCase())
      )
     const InputHandler = (e) =>{
       setSearch(e.target.value);
     } 
  return (
    <div className="App">
      <div>
      <h1>Search a currency</h1>
      <from>
        <input type="text" placeholder = "search" onChange={InputHandler}></input>
      </from>
      </div>
      {filteredCoins.map(coin => {
      return(
      <Coins key = {coin.id} 
      name = {coin.name} 
      image = {coin.image}
      symbol = {coin.symbol}
      volume = {coin.market_cap}
      price = {coin.current_price}
      rank = {coin.market_cap_rank}
      per = {coin.price_change_percentage_24h}
       />
      )})}
    </div>
  );
}

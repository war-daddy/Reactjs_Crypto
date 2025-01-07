import React, { useEffect, useState } from "react";
import axios from "axios";
import Coins from "./Coins";
import './Coins.css';
import './App.css'
import CoinCard from "./CoinCard";

export default function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; 

  useEffect(() => {
    axios
      .get("https://api.coinlore.net/api/tickers/")
      .then((res) => {
        console.log(res);
        setCoins(res.data.data);
      })
      .catch(error => console.log(error));
  }, []);

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const InputHandler = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  
  const indexOfLastItem = currentPage * itemsPerPage;
 
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  const currentCoins = filteredCoins.slice(indexOfFirstItem, indexOfLastItem);

 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

 
  const totalPages = Math.ceil(filteredCoins.length / itemsPerPage);

  return (
    <div className="App">
      <div>
        {/* <h1>Search a currency</h1> */}
        <form style={{marginTop:"30px"}}>
          <input type="text" placeholder="search" onChange={InputHandler}></input>
        </form>
      </div>
      <div className="coin-box">
        {currentCoins.map(coin => (
          <CoinCard key={coin.id} coin={coin} /> // Pass coin data to CoinCard
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

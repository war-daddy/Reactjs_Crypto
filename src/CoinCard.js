import React from 'react';
import './CoinCard.css'; // Import CSS for styling
import img from './coinicon.png'
const CoinCard = ({ coin }) => {
    return (
        <div className="coin-card">
            <div className="coin-header">
                <h2>{coin.name} ({coin.symbol})</h2>
                <div style={{display:'flex'}}>
                <p className="rank">Rank: {coin.rank}</p>
                <img style={{marginLeft:"20px"}} src={img} alt="crypto" />
                </div>
            </div>
            <div className='coin-conbox'>
            <div className="coin-body">
                <p><strong>Price (USD):</strong> <span className="price">${parseFloat(coin.price_usd).toFixed(2)}</span></p>
                <div className="dotted-line"></div>
                <p><strong>Market Cap (USD):</strong> <span className="market-cap">${parseFloat(coin.market_cap_usd).toFixed(2)}</span></p>
                <div className="dotted-line"></div>
                <p><strong>Circulating Supply:</strong> {coin.csupply}</p>
                <div className="dotted-line"></div>
                <p><strong>Total Supply:</strong> {coin.tsupply}</p>
                <div className="dotted-line"></div>
                <p><strong>Max Supply:</strong> {coin.msupply}</p>
                <div className="dotted-line"></div>
                <p><strong>24h Volume:</strong> <span className="volume">${parseFloat(coin.volume24).toFixed(2)}</span></p>
                {/* <div className="dotted-line"></div> */}
            </div>
            <div className="coin-footer">
                <p><strong>Price Change (1h):</strong> <span className={coin.percent_change_1h < 0 ? 'negative' : 'positive'}>{coin.percent_change_1h}%</span></p>
                <div className="dotted-line"></div>
                <p><strong>Price Change (24h):</strong> <span className={coin.percent_change_24h < 0 ? 'negative' : 'positive'}>{coin.percent_change_24h}%</span></p>
                <div className="dotted-line"></div>
                <p><strong>Price Change (7d):</strong> <span className={coin.percent_change_7d < 0 ? 'negative' : 'positive'}>{coin.percent_change_7d}%</span></p>
            </div>
            </div>
        </div>
    );
};

export default CoinCard; 
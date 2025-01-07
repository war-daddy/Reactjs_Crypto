import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './header.css';

function Header() {
    const location = useLocation();

    return (
        <div className="header">
            <div className="header-left">
            <div className="name-head" >Live Crypto Tracker</div> 
            </div>
            <div className="header-right">
                <NavLink 
                    to="/" 
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                    Live
                </NavLink>
                <NavLink 
                    to="/news" 
                    className={`nav-link ${location.pathname === '/news' ? 'active' : ''}`}
                >
                    News
                </NavLink>

                <NavLink 
                    to="/nft" 
                    className={`nav-link ${location.pathname === '/nft' ? 'active' : ''}`}
                >
                    NFTs
                </NavLink>

            </div>
        </div>
    );
}

export default Header;
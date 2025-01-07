import React from 'react';
import './CoinsHeader.css'; // Optional: Import CSS for styling

function CoinsHeader() {
    return (
        <thead>
            <tr className="coins-header">
                <th className="header-item">Rank</th>
                <th className="header-item">Name</th>
                <th className="header-item">Price</th>
            </tr>
        </thead>
    );
}

export default CoinsHeader; 
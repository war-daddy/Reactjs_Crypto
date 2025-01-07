import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NFTs.css'; // Import CSS for styling

const NFTs = () => {
    const [nfts, setNfts] = useState([]); // State to hold NFT data
    const [loading, setLoading] = useState(true); // State to manage loading state
    const [error, setError] = useState(null); // State to manage error

    useEffect(() => {
        const fetchNFTs = async () => {
            const options = {
                method: 'GET',
                url: 'https://openblur.p.rapidapi.com/collections',
                params: {
                    sortBy: 'volumeOneDay',
                    orderBy: 'desc'
                },
                headers: {
                    'x-rapidapi-key': '1bb3dfa6a7msh2211aed496e9ebdp166b9ajsnb3f1b0987076',
                    'x-rapidapi-host': 'openblur.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setNfts(response.data); // Set the NFT data
            } catch (error) {
                setError(error); // Set the error if any
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchNFTs(); // Call the fetch function
    }, []); // Empty dependency array to run once on mount

    if (loading) return <p>Loading...</p>; // Show loading state
    if (error) return <p>Error fetching NFTs: {error.message}</p>; // Show error state

    return (
        <div className="nft-container">
            <h1>NFT Collections</h1>
            <div className="nft-list">
                {nfts.map((nft) => (
                    <div key={nft.contractAddress} className="nft-card">
                        <img src={nft.imageUrl} alt={nft.name} className="nft-image" />
                        <h2>{nft.name}</h2>
                        <p><strong>Slug:</strong> {nft.slug}</p>
                        <p><strong>Total Supply:</strong> {nft.totalSupply}</p>
                        <p><strong>Number of Owners:</strong> {nft.numberOwners}</p>
                        <p><strong>Floor Price:</strong> {nft?.floorPrice?.amount} {nft?.floorPrice?.unit}</p>
                        <p><strong>Volume (24h):</strong> {nft?.volumeOneDay?.amount} {nft?.volumeOneDay?.unit}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NFTs;

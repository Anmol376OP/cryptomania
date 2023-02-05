import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useGetCryptosQuery } from '../services/cryptoAPI'
import '../styles/Cryptocurrencies.css';
import Input from 'rc-input';

const Cryptocurrencies = () => {
    const { data, isFetching } = useGetCryptosQuery();
    const [searchTerm, setSearchTerm] = useState('');

    const [cryptos, setCryptos] = useState(data?.data?.coins);
    // To avoid nul data while refreshing
    useEffect(() => {
        setCryptos(data?.data?.coins)
    })
    // for search queries
    useEffect(() => {
        const filteredData = data?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCryptos(filteredData)
    }, [cryptos, searchTerm])

    if (data) { } else return (<div>
        <h2>Loading....</h2>
    </div>)


    return (
        <div className='CrBox'>
            <div className='search-crypto'>
                <span className='LatestCrypto'>Today's Status : </span>
                <Input placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className='BoxCC'>
                {cryptos ? cryptos.map((index) => (
                    <div className='CardContainer' key={index.id}>
                        <div className='Card-box'>
                            <div className='Card-Content'>
                                <span className='Title'>{index.name}</span>
                            </div>
                        </div>
                    </div>
                )) : ''}
            </div>
        </div>
    )
}

export default Cryptocurrencies
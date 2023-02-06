import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Cryptocurrencies.css';
import Input from 'rc-input';

const Cryptocurrencies = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [cryptos, setCryptos] = useState();

    useEffect(() => {
        const filteredData = cryptos?.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setCryptos(filteredData)
    }, [cryptos, searchTerm])

    const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coins',
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
            'tiers[0]': '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: '50',
            offset: '0'
        },
        headers: {
            'X-RapidAPI-Key': '878f0a0e71mshf8398d7f495ec97p11d493jsn8e6523887d71',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        setCryptos(response.data.data.coins);
    }).catch(function (error) {
        console.error(error);
    });

    if (cryptos) { } else return (<div>
        <h2 style={{ height: '100vh', color: 'white' }}>Loading....</h2>
    </div>)

    // console.log(cryptos ? cryptos[0].sparkline : '')
    return (
        <div className='CrBox'>
            <div className='search-crypto'>
                <span className='LatestCrypto'>Today's Status : </span>
                <Input placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <div className='BoxCC'>
                {cryptos ? cryptos.map((index) => (
                    <div className='CardContainer' key={index.uuid}>
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
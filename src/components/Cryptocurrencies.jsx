import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useGetCryptosQuery } from '../services/cryptoAPI'
import '../styles/Cryptocurrencies.css'

const Cryptocurrencies = () => {
    const { data, isFetching } = useGetCryptosQuery();

    var cryptos = data?.data?.coins;
    // console.log(cryptos)
    if (data) { } else return (<div>
        <h2>Loading....</h2>
    </div>)

    // console.log(cryptos[1])

    return (
        <div className='BoxCC'>
            {cryptos.map((index) => (
                <div className='CardContainer' key={index.id}>
                    <div className='Card-box'>
                        <div className='Card-Content'>
                            <span className='Title'>{index.name}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cryptocurrencies
import React from 'react';
import millify from 'millify';
import { useGetCryptosQuery } from '../services/cryptoAPI'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Cryptocurrencies.css';
import Input from 'rc-input';
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(
    LineElement, CategoryScale, LinearScale, PointElement
)

const Cryptocurrencies = () => {
    const { data, isFetching } = useGetCryptosQuery();
    const [cryptos, setCryptos] = useState(data?.data?.coins);
    const [isFlipped, setIsFlipped] = useState(false)
    const [x, setX] = useState(1)
    useEffect(() => {
        setCryptos(data?.data?.coins)
    }, [data])

    const lb = []
    for (let i = 0; i < 25; i++)
        lb.push(i)

    const dataChart = {
        labels: lb,
        datasets: [
            {
                labels: '24h Analysis',
                data: cryptos ? cryptos[0].sparkline : [],
                pointRadius: 0,
                backgroundColor: 'transparent',
                borderColor: 'white',
            }
        ]
    }
    const optionsChart = {
        plugins: {
            legend: false
        }
    }

    if (cryptos) { } else return (<div>
        <h2 style={{ height: '100vh', color: 'white' }}>Loading....</h2>
    </div>)

    function Clicked(ind) {
        console.log('hi')
    }

    return (
        <div className='Cr-outbox'>
            <Line data={{
                labels: lb,
                datasets: [
                    {
                        labels: '24h Analysis',
                        data: cryptos ? cryptos[x - 1].sparkline : [],
                        pointRadius: 0,
                        backgroundColor: 'transparent',
                        borderColor: 'white',
                    }
                ]
            }} options={optionsChart} className="Chart"></Line>
            <div className='Display'>
                BItcoin
            </div>
            <div className='BoxCC'>
                {cryptos ? cryptos.map((index) => (
                    <div className='CardContainer' key={index.uuid}>
                        <div className={isFlipped ? 'Card-box flipped' : 'Card-box'} onClick={() => setX(index.rank)}>
                            <div className='Card-face front'>
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
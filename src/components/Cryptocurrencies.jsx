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
    const [logo, setLogo] = useState('https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg')
    const [title, setTitle] = useState('Bitcoin')
    const [change, setChange] = useState('-1%')
    const [price, setPrice] = useState('23K')
    const [vol, setVol] = useState('2B')
    const [tier, setTier] = useState('1')
    const [cap, setCap] = useState('44B')
    const [symbol, setSymbol] = useState('BTC')
    const [rank, setRank] = useState('1')
    const [x, setX] = useState(1)
    const [color, setColor] = useState('orange')
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
        <h2 style={{ height: '110vh', color: 'white' }}>Loading....</h2>
    </div>)

    function Clicked(ind) {
        console.log('hi')
    }

    return (
        <div className='Cr-outbox'>
            <section className='sec-1'>
                <Line data={{
                    labels: lb,
                    datasets: [
                        {
                            labels: '24h Analysis',
                            data: cryptos ? cryptos[x - 1].sparkline : [],
                            pointRadius: 0,
                            backgroundColor: 'transparent',
                            borderColor: change > 0 ? 'green' : 'red',
                        }
                    ]
                }} options={optionsChart} className="Chart"></Line>
                <div className='Display' style={{ border: `2px solid ${color}` }}>
                    <div className='logo-here' style={{ backgroundImage: `url(${logo})` }}></div>
                    <div className='displayName'>{title}</div>
                    <div className='Statbox'>
                        <div className='Stat'>Symbol : </div>
                        <div className='Val'>{symbol}</div>
                    </div>
                    <div className='Statbox'>
                        <div className='Stat'>Rank : </div>
                        <div className='Val'>{rank}</div>
                    </div>
                    <div className='Statbox'>
                        <div className='Stat'>Price ($) : </div>
                        <div className='Val'>{price}</div>
                    </div>
                    <div className='Statbox'>
                        <div className='Stat'>Tier : </div>
                        <div className='Val'>{tier}</div>
                    </div>
                    <div className='Statbox'>
                        <div className='Stat'>Listed At : </div>
                        <div className='Val'>{vol}</div>
                    </div>
                    <div className='Statbox'>
                        <div className='Stat'>Percentage Change : </div>
                        <div className='Val'>{change}%</div>
                    </div>

                    <div className='Statbox'>
                        <div className='Stat'>Market Cap : </div>
                        <div className='Val'>{cap}</div>
                    </div>
                </div>
            </section>
            <div className='BoxCC'>
                {cryptos ? cryptos.map((index) => (
                    <div className='CardContainer' key={index.uuid}>
                        <div className='Card-box' onClick={() => {
                            setX(index.rank);
                            setLogo(index.iconUrl);
                            setTitle(index.name);
                            setRank(index.rank);
                            setPrice(millify(index.price));
                            setChange(index.change);
                            setCap(millify(index.marketCap));
                            setVol(millify(index.listedAt))
                            setColor(index.color)
                            console.log(cryptos);
                        }}>
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
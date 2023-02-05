import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoAPI';
import '../styles/Homepage.css'
import millify from 'millify';
import axios from 'axios';
import '../components/Button.js'
import ReadMoreButton from '../components/Button.js';

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery();
    // const [user, setUser] = useState([]);
    // const fetchData = () => {
    //     return axios.get("https://newsapi.org/v2/everything?q=crypto&apiKey=75e5c75aa2a84d919c90f7bbd67b5c1f&page=1")
    //         .then((response) => setUser(response.data));
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])
    // console.log(user ? user.articles : '')

    var cryptos = data?.data?.coins;
    // console.log(cryptos[1])
    return (
        <div className='Homepage-box'>
            <section className='bg-home'>
                <div className='home-heading-container'>

                    <div className='Home-text'>
                        <span className='HeadingText'>Welcome to </span>
                        <span className='cmania'>CryptoMania</span>
                        <span className='paragraphText' style={{ marginTop: '15px' }}>
                            We provide you with the latest news and information about crypto.
                            Feel free to explore our website and get to know about the latest trends in the market.
                            From the top-tier cryptos rampaging in the market to the not so well known;
                            we have brought it to you right on your fingertips
                        </span>
                        <Link to='/cryptocurrencies' className='ReadMoreButton' style={{ textDecoration: 'none', paddingTop: '25px' }}>
                            <ReadMoreButton />
                        </Link>
                    </div>
                    <div className='image'></div>
                </div>
            </section>
            <section className='sec-2'>
                <p className='top3text'>Top 3 trending cryptos</p>
                <div className='secFlex'>
                    <div className='Sec2Outbox'>
                        <Link to='/cryptocurrencies'>
                            <div className='Card-Container'>
                                <div className='Inner-container'>
                                    <h3 className='cheading'>
                                        1. {cryptos ? cryptos[0].name : 'Name'}
                                        <img className='iconImg' src={cryptos ? cryptos[0].iconUrl : ''}></img>
                                    </h3>
                                    <span className='priceCrypto'>
                                        <span>Price : </span>
                                        <span>{millify(cryptos ? cryptos[0].price : 0)}</span>
                                    </span>
                                    <span className='priceCrypto'>
                                        <span>MarketCap : </span>
                                        <span>{millify(cryptos ? cryptos[0].marketCap : 0)}</span>
                                    </span>
                                    <span className='priceCrypto'>
                                        <span>Daily Change : </span>
                                        <span>{millify(cryptos ? cryptos[0].change : 0)}%</span>
                                    </span>
                                    <button className='CButton'>
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='Sec2Outbox'>
                        <Link to='/cryptocurrencies'>
                            <div className='Card-Container' id='silver'>
                                <div className='Inner-container'>
                                    <h3 className='cheading'>
                                        2. {cryptos ? cryptos[1].name : 'Name'}
                                        <img className='iconImg' src={cryptos ? cryptos[1].iconUrl : ''}></img>
                                    </h3>
                                    <span className='priceCrypto'>
                                        <span>Price : </span>
                                        <span>{millify(cryptos ? cryptos[1].price : 0)}</span>
                                    </span>
                                    <span className='priceCrypto'>
                                        <span>MarketCap : </span>
                                        <span>{millify(cryptos ? cryptos[1].marketCap : 0)}</span>
                                    </span>
                                    <span className='priceCrypto'>
                                        <span>Daily Change : </span>
                                        <span>{millify(cryptos ? cryptos[1].change : 0)}%</span>
                                    </span>
                                    <button className='CButton' style={{ backgroundColor: '#c0c0c0' }}>
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='Sec2Outbox'>
                        <Link to='/cryptocurrencies'>
                            <div className='Card-Container' id='bronze'>
                                <div className='Inner-container'>
                                    <h3 className='cheading'>
                                        3. {cryptos ? cryptos[2].name : 'Name'}
                                        <img className='iconImg' src={cryptos ? cryptos[2].iconUrl : ''}></img>
                                    </h3>
                                    <span className='priceCrypto'>
                                        <span>Price : </span>
                                        <span>{millify(cryptos ? cryptos[2].price : 0)}</span>
                                    </span>
                                    <span className='priceCrypto'>
                                        <span>MarketCap : </span>
                                        <span>{millify(cryptos ? cryptos[2].marketCap : 0)}</span>
                                    </span>
                                    <span className='priceCrypto'>
                                        <span>Daily Change : </span>
                                        <span>{millify(cryptos ? cryptos[2].change : 0)}%</span>
                                    </span>
                                    <button className='CButton' style={{ backgroundColor: '#CD7F32' }}>
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
                <div className='Bottomnews'>
                    <div className='Image-div-bottom'></div>
                    <div className='Text-image'>
                        Want to explore more in the world of crypto ?
                        Dive into our <Link to='/news' style={{ textDecoration: 'none' }}><span className='xyz'>News</span></Link> section to begin with.
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Homepage
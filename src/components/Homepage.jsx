import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoAPI';
import '../styles/Homepage.css'
import millify from 'millify';

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery();
    // console.log(data);
    var cryptos = data?.data?.coins;
    return (
        <div className='Homepage-box'>
            <section className='bg-home'>
                <div className='home-heading-container'>

                    <div className='Home-text'>
                        <span className='HeadingText'>Welcome to </span>
                        <span className='cmania'>CryptoMania</span>
                        <span className='paragraphText'>
                            Get the latest news and information about crypto,
                            Get the latest news and information about crypto,
                            Get the latest news and information about crypto,
                            Get the latest news and information about crypto,
                        </span>
                    </div>
                    <div className='image'></div>
                </div>
            </section>
            <section className='sec-2'>
                <span className='top3text'>Top 3 trending cryptos</span>
                <div className='secFlex'>
                    <div className='Sec2Outbox'>
                        <Link to='/'>
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
                        <Link to='/'>
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
                                    <button className='CButton'>
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='Sec2Outbox'>
                        <Link to='/'>
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
                                    <button className='CButton'>
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Homepage
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoAPI';
import '../styles/Homepage.css'
import '../components/Button.js'
import ReadMoreButton from '../components/Button.js';

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery();
    var cryptos = data?.data?.coins;
    // console.log(cryptos[0].sparkline)
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
                        <div className='flexLayer'>
                            <Link to='/cryptocurrencies' className='ReadMoreButton' style={{ textDecoration: 'none', paddingTop: '25px' }}>
                                <ReadMoreButton title='Explore Crypto' />
                            </Link>
                            <Link to='/news' className='ReadMoreButton' style={{ textDecoration: 'none', paddingTop: '25px' }}>
                                <ReadMoreButton title='Explore News' />
                            </Link>
                        </div>
                    </div>
                    <div className='image'></div>
                </div>
            </section>
        </div>
    )
}

export default Homepage
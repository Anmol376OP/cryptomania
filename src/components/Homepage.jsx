import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoAPI';
import '../styles/Homepage.css'
import Img from '../assets/bg.jpg';

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery();
    console.log(data);

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
                This is section 2
            </section>
        </div>
    )
}

export default Homepage
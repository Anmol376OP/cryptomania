import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/NewsItem.css'
import axios from 'axios'
import Input from 'rc-input';


const News = () => {
    const [user, setUser] = useState([]);
    const options = {
        method: 'GET',
        url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news',
        params: { pair_ID: '1057391', page: '1', time_utc_offset: '28800', lang_ID: '1' },
        headers: {
            'X-RapidAPI-Key': '878f0a0e71mshf8398d7f495ec97p11d493jsn8e6523887d71',
            'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
        }
    };
    useEffect(() => {
        axios.request(options).then(function (response) {
            setUser(response.data.data[0].screen_data.news);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])
    console.log(user)

    if (user) { } else return (<div>
        <h2 style={{ height: '100vh', color: 'white' }}>Loading....</h2>
    </div>)

    return (
        <div className='News-outbox'>
            {/* <Input placeholder='Search' onChange={(e) => setMaxIndex(e.target.value)} /> */}
            <div className='NewsItemContainer'>
                {user ? user.map((index) => (
                    <div className="card">
                        <h4><a target='_blank' href={index.news_link ? index.news_link : ''} style={{ textDecoration: 'none', color: 'white' }}>{index.HEADLINE ? index.HEADLINE : 'Title'}</a></h4>
                        <a target='_blank' href={index.news_link ? index.news_link : ''} style={{ textDecoration: 'none', color: 'white' }}><i className="fas fa-arrow-right"></i></a>
                        <p>{index.news_provider_name ? index.news_provider_name.substring(0, 25) : 'Anonymous'}</p>
                        <p>{index.last_updated ? index.last_updated : 'Loading ...'}</p>
                        <div className="pic" style={index.related_image_big ? { backgroundImage: `url(${index.related_image_big})` } : ''} alt=''></div>
                        <button className='ExpandingButton'></button>
                    </div>
                )) : ''}
            </div>
        </div>
    )
}

export default News
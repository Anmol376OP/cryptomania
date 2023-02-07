import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/NewsItem.css'
import axios from 'axios'
import Input from 'rc-input';

const News = () => {
    const [user, setUser] = useState([]);
    const [resp, setResp] = useState(false);

    const options = {
        method: 'GET',
        url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-news',
        params: { pair_ID: '1057391', page: '2', time_utc_offset: '28800', lang_ID: '1' },
        headers: {
            'X-RapidAPI-Key': '878f0a0e71mshf8398d7f495ec97p11d493jsn8e6523887d71',
            'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
        }
    };
    useEffect(() => {
        axios.request(options).then(function (response) {
            setUser(response.data.data[0].screen_data.news);
            setResp(true);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])


    if (resp) { } else return (<div>
        <h2 style={{ height: '100vh', color: 'white' }}>Loading....</h2>
    </div>)

    return (
        <div className='News-outbox'>
            <div className='Trending'>Trending Today</div>
            <div className="fade_rulex" style={{ backgroundImage: `-webkit-gradient( linear, left bottom, right bottom, color-stop(0.02, gold), color-stop(0.5, gold), color-stop(0.98, black) )` }}></div>
            <div className='News-main'>
                <div className='box-row'>
                    <div className='box-row-item1' style={user ? { backgroundImage: `url(${user[0].related_image_big})` } : {}}>
                        <a href={user[0].news_link} target='_blank' style={{ textDecoration: 'none' }}>
                            <div className='innerText1'>{user[0].HEADLINE}
                            </div>
                        </a>
                    </div>
                    <div className='box-row-item2'>
                        <div className='col-1' style={user ? { backgroundImage: `url(${user[1].related_image_big})` } : {}}>
                            <a href={user[0].news_link} target='_blank' style={{ textDecoration: 'none' }}>
                                <div className='innerText1'>{user[1].HEADLINE}
                                </div>
                            </a>
                        </div>
                        <div className='col-2'>
                            <div className='inner-1' style={user ? { backgroundImage: `url(${user[2].related_image_big})` } : {}}>
                                <a href={user[0].news_link} target='_blank' style={{ textDecoration: 'none' }}>
                                    <div className='innerText1'>{user[2].HEADLINE}
                                    </div>
                                </a>
                            </div>
                            <div className='inner-2' style={user ? { backgroundImage: `url(${user[3].related_image_big})` } : {}}>
                                <a href={user[0].news_link} target='_blank' style={{ textDecoration: 'none' }}>
                                    <div className='innerText1'>{user[3].HEADLINE}</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Trending' style={{ marginTop: '20px' }}>More From Crypto</div>
            <div className="fade_rulex" style={{ backgroundImage: `-webkit-gradient( linear, left bottom, right bottom, color-stop(0.02, gold), color-stop(0.5, gold), color-stop(0.98, black) )` }}></div>
            <div className='NewsItemContainer'>
                {user ? user.slice(4, 14).map((index) => (
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
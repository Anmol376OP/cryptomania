import React from 'react'
import { useEffect, useState } from 'react'
import '../styles/NewsItem.css'
import axios from 'axios'
import Input from 'rc-input';
const News = () => {
    const [user, setUser] = useState([]);
    const [maxIndex, setMaxIndex] = useState(15);
    const [x, setX] = useState([])
    const fetchData = async () => {
        const response = await axios.get("https://newsapi.org/v2/everything?q=crypto&apiKey=75e5c75aa2a84d919c90f7bbd67b5c1f&page=2");
        setUser(response.data);
        setX(user?.articles?.slice(5, maxIndex));
    }

    useEffect(() => {
        fetchData();
    }, [user, maxIndex])

    if (user) { } else return (<div>
        <h2 style={{ height: '100vh', color: 'white' }}>Loading....</h2>
    </div>)

    return (
        <div className='News-outbox'>
            {/* <Input placeholder='Search' onChange={(e) => setMaxIndex(e.target.value)} /> */}
            <div className='NewsItemContainer'>
                {x ? x.map((index) => (
                    <div className="card">
                        <h4><a target='_blank' href={index.url ? index.url : ''} style={{ textDecoration: 'none', color: 'white' }}>{index.title ? index.title : 'Title'}</a></h4>
                        <a target='_blank' href={index.url ? index.url : ''} style={{ textDecoration: 'none', color: 'white' }}><i className="fas fa-arrow-right"></i></a>
                        <p>{index.author ? index.author.substring(0, 25) : 'Anonymous'}</p>
                        <p>{index.publishedAt ? index.publishedAt : 'Loading ...'}</p>
                        <div className="pic" style={index.urlToImage ? { backgroundImage: `url(${index.urlToImage})` } : ''} alt=''></div>
                        <button className='ExpandingButton'>
                        </button>
                    </div>
                )) : ''}
            </div>
        </div>
    )
}

export default News
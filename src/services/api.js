import axios from 'axios'

// Create instance called instance
const instance = axios.create({
    baseURL: 'https://crypto-news-live3.p.rapidapi.com/news',
    headers: {
        'x-rapidapi-host': 'crypto-news-live3.p.rapidapi.com',
        'x-rapidapi-key': '878f0a0e71mshf8398d7f495ec97p11d493jsn8e6523887d71',
    },
});

export default {
    getData: () =>
        instance({
            'method': 'GET',
            'url': 'https://crypto-news-live3.p.rapidapi.com/news',
        })
}
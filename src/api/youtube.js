import axios from 'axios';

const KEY = 'AIzaSyD21fEYF0qu2-YmQJAZO1xTozr1t846FCA';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});
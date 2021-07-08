import axios from 'axios';

const KEY = 'AIzaSyC4UErfGeHFh2tydyel_mT7MSpQQ1PWOmA';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});
import axios from 'axios';

export const getYouTubeVideoInfo = video => {
  return axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${video}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
  .then(resp => {
    const videoId = resp.data.items[0].id.videoId;
    return axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
  })
}

export const getVimeoVideoInfo = video => {
  return axios.get(`https://vimeo.com/api/oembed.json?url=${video}`);
}

export const getVimeoDetailedInfo = id => {
  return axios.get(`https://api.vimeo.com/videos?uris=/videos/${id}&fields=metadata&access_token=${process.env.REACT_APP_VIMEO_API_KEY}`);
}
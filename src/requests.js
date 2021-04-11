import axios from 'axios';

const APIKeyYouTube = 'AIzaSyC1XsTp5oyzcKrycQx1fZidIRDvu8vn3Ys';
const APIKeyVimeo = '858c0019c6f70ddaf1471cb24cecc28d';


export const getYouTubeVideoInfo = video => {
  return axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${video}&key=${APIKeyYouTube}`)
  .then(resp => {
    const videoId = resp.data.items[0].id.videoId
    return axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${APIKeyYouTube}`)
  })
}

export const getVimeoVideoInfo = video => {
  return axios.get(`https://vimeo.com/api/oembed.json?url=${video}`)
}

export const getVimeoDetailedInfo = id => {
  return axios.get(`https://api.vimeo.com/videos?uris=/videos/${id}&fields=metadata&access_token=${APIKeyVimeo}`);
}


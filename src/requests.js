import axios from 'axios';

const APIKeyYouTube = '';
const APIkeyVimeo = ''

export const getYouTubeVideoInfo = video => {;
  return axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${video}&key=${APIKeyYouTube}`)
  .then(resp => {
    const videoId = resp.data.items[0].id.videoId
    return axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${APIKeyYouTube}`)
  })
}

// export const getVideoDetailedInfo = id => {
//   return axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${id}&key=${APIKey}`)
// }

export const getVimeoVideoInfo = video => {
  return axios.get(`https://vimeo.com/api/oembed.json?url=${video}`)
  .then(resp => {
    const videoId = resp.data.video_id
    return axios.get(`https://api.vimeo.com/videos?uris=/videos/${videoId}&fields=name,release_time,metadata,thumbnail_url&access_token=${APIkeyVimeo}`);
  })
}
import axios from 'axios';

const APIKey = ''

export const getVideoInfo = video => {
  return axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${video}&key=${APIKey}`)
  .then(resp => {
    const videoId = resp.data.items[0].id.videoId
    return axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${APIKey}`)
  })
}

// export const getVideoDetailedInfo = id => {
//   return axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${id}&key=${APIKey}`)
// }
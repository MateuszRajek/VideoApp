import axios from 'axios';

const APIKey = ''

export const fetchYoutubeRequest = id => {
  console.log(id, APIKey)
  return axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${id}&key=${APIKey}`)
}
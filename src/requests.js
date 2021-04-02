import axios from 'axios';

const APIKey = 'AIzaSyC1XsTp5oyzcKrycQx1fZidIRDvu8vn3Ys'

export const fetchYoutubeRequest = id => {
  console.log(id, APIKey)
  return axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${id}&key=${APIKey}`)
  // return axios.get(`https://youtube.googleapis.com/youtube/v3/search?id=${id}&key=${APIKey}`)
}
import { getVimeoVideoInfo, getVimeoDetailedInfo } from '../requests'

export const fetchVimeoData = async (inputValue, setVideoList, addVideoToLocalStorage, setInputValue, videoSource, videosList, video) => {
 
  await getVimeoVideoInfo(inputValue).then(async resp => {
    const { title, upload_date, thumbnail_url, video_id } = resp.data;
    video = { ...video, source: videoSource.toLowerCase(), title: title, image: thumbnail_url, 
      releaseDate: upload_date.split(' ')[0], id: video_id };
    await getVimeoDetailedInfo(video_id).then(async resp => {
      const likes = resp.data.data[0].metadata.connections.likes.total;
      video = { ...video, likes: likes };
      setVideoList([...videosList, video]);
      addVideoToLocalStorage(video.id, video);
      setInputValue('');
    })  
  }).catch(error => alert(`${error.message} | Please check if your API key, video url or video id are correct`));
}
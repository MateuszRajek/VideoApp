import { getYouTubeVideoInfo } from '../requests';

export const fetchYoutubeData = async (inputValue, setVideoList, addVideoToLocalStorage, setInputValue, videoSource, videosList, video) => {

  await getYouTubeVideoInfo(inputValue).then(resp => {
    const { items } = resp.data;
    const videoData = items[0];
    const { title, publishedAt, thumbnails } = videoData.snippet;
    const { likeCount, viewCount } = videoData.statistics;
    const id = videoData.id;
    video = { ...video, source: videoSource.toLowerCase(), title: title, image: thumbnails.medium.url, 
      releaseDate: publishedAt.split('T')[0], likes: likeCount, views: viewCount, id: id };
    setVideoList([...videosList, video]);
    addVideoToLocalStorage(video.id, video);
    setInputValue('');
  }).catch(error => alert(`${error.message} | Please check if your API key, video url or video id are correct`));
} 
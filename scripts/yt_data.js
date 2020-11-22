const axios = require('axios');

const YouTubeAPI = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
});

const GetData = async (videoId) => {
  return await new Promise((resolve, reject) => {
    YouTubeAPI.get('videos', {
      params: {
        part: 'contentDetails,snippet',
        key: '<YouTube_API>',
        id: videoId
      }
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

GetData('T8g310bUXYI') // VideoId
  .then((res) => {
    const VidYData = {
      title: res.data.items[0].snippet.title,
      publishedAt: res.data.items[0].snippet.publishedAt,
      duration: res.data.items[0].contentDetails.duration
    };
    console.log('res::>', VidYData);
  })
  .catch((err) => console.log('err', err));

angular.module('dose')
  .service('Video', Video);

Video.$inject = ['$http', 'YT'];
function Video($http, YT) {

  return {
    get: function() {

    return  $http.get(YT, {
      params: {
        key:'AIzaSyAcX3tsJ1PfEDr2uRO8zkBhPoF2q2vnneA',
        video: 'video',
        maxResults: '1',
        type: 'video',
        part: 'id,snippet',
        fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle',
        channelId: "UCsT0YIqwnpJCM-mx7-gSA4Q"
      }
    })
    .then(function(res) {
      console.log(res.data.items[0].id.videoId)
        return res
      })
  }
}
}  

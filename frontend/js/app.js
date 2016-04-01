angular.module('dose',  ['ngResource', 'satellizer', 'angular-jwt'])
  .constant('API_URL', 'http://localhost:3000')
  .constant('YT', 'https://www.googleapis.com/youtube/v3/search')
  .config(oauthConfig);

oauthConfig.$inject = ['API_URL', '$authProvider', 'FACEBOOK_API_KEY', 'GITHUB_API_KEY'];
function oauthConfig(API_URL, $authProvider, FACEBOOK_API_KEY, GITHUB_API_KEY) {
  $authProvider.facebook({
    url: API_URL + '/auth/facebook',
    clientId: FACEBOOK_API_KEY
  })
  $authProvider.github({
    url: API_URL + '/auth/github',
    clientId: GITHUB_API_KEY
  })

  $authProvider.httpInterceptor = function(config) {
    return !!config.url.match(API_URL);
  };

  $authProvider.tokenPrefix = null;
}
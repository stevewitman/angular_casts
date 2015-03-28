App.directive('flowPlayer', function() {
  return function(scope, element, attrs) {
    return scope.$watch('selectedScreencast', function(screencast) {
      if (screencast) {
        return element.flowplayer({
          playlist: [
            [
              {
                mp4: screencast.video_url
              }
            ]
          ],
          ratio: 9 / 14
        });
      }
    });
  };
});

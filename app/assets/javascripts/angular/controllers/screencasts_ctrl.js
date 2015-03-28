App.controller('ScreencastsCtrl', [
  '$scope', 'Screencast', function($scope, Screencast) {
    $scope.selectedScreencast = null;
    $scope.selectedRow = null;
    $scope.screencasts = Screencast.query(function() {
      $scope.selectedScreencast = $scope.screencasts[0];
      return $scope.selectedRow = 0;
    });
    return $scope.showScreencast = function(screencast, row) {
      $scope.selectedScreencast = screencast;
      return $scope.selectedRow = row;
    };
  }
]);

App.factory('Screencast', [
  '$resource', function($resource) {
    return $resource('/api/screencasts/:id', {
      id: '@id'
    });
  }
]);

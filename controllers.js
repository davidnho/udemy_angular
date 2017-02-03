angular.module('udemyAdmin').controller('articleCtrl', function($scope, pageSize) {
  $scope.articles = [
    { title: "Arduino Tutorial" },
    { title: "After Effects Tutorial" },
    { title: "Django Tutorial" }
  ];

  $scope.numArticles = pageSize;
}); 
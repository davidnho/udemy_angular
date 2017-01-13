angular.module('udemyAdmin').controller('articleCtrl', function($scope) {
  $scope.articles = [
    { title: "Learn AngularJS" },
    { title: "JavaScript closures explained!" }
  ];
}); 
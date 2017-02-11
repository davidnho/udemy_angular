angular.module('udemyAdmin').controller('articleCtrl', function($scope) {
  $scope.articles = [
    { id:1,title: "Learn AngularJS" },
    { id:2,title: "JavaScript closures explained!" }
  ];
}); 
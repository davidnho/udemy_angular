angular.module('udemyAdmin').controller('articleCtrl', function($scope, pageSize) {
  $scope.articles = [

    { id:1,title: "Learn AngularJS" },
    { id:2,title: "JavaScript closures explained!" }

  ];

  $scope.numArticles = pageSize;
}); 
angular.module('angReview').controller('angCtrl', function ($scope) {
    var title = "List of names";
    var age = 45;
    $scope.names = [{
            'firstname': 'Noel',
            'lastname': 'David'
        },
        {
            'firstname': 'Ariegail',
            'lastname': 'David'
        },
        {
            'firstname': 'Apol',
            'lastname': 'Lapuz'
        },
    ];

    $scope.getTitle = function () {
        return title;
    };
 
    $scope.count = 0;
    $scope.getAge = function () {
        return age;  
    };
});
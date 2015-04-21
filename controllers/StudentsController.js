studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;
});


studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope, StudentsFactory){
    $scope.students = StudentsFactory.students;
    $scope.studentsWithPermissionSlip = function(student){
        student.permissionSlip=true;
    };
});

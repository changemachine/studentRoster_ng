studentRoster.factory('StudentsFactory', function StudentsFactory(){
    var factory={};
    factory.students=[];

    factory.addStudent = function(){
        var student = {
                name: this.studentName,
                permissionSlip: false
            };
        this.students.push(student);
        this.studentName=null;
    };

    factory.deleteStudent= function(student){
        var index = this.students.indexOf(student);
        this.students.splice(index,1);
    };

    return factory;

});

"use strict"

// 1 

class Employee {
    static weekends = 18;
    constructor(firstName,lastName,age,jobPosition,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobPosition = jobPosition;
        this.salary = salary;
    }
    get fullName () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
    yearSalary () {
        console.log(this.salary * 12);
    }
}

let firstEmployee = new Employee("Petro", "Kalinin", 34, "driver", 1000);
console.log(firstEmployee);
firstEmployee.fullName;
firstEmployee.yearSalary();

let secondEmployee = new Employee("Vyacheslav", "Shynkarov", 20, "developer", 15000);
console.log(secondEmployee);
secondEmployee.fullName;
secondEmployee.yearSalary();
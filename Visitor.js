// 行为设计模式

function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}

Employee.prototype = {
    getSalary: function () {
        return this.salary;
    },
    setSalary: function (salary) {
        this.salary = salary;
    },
    accept: function (visitorFunction) {
        visitorFunction(this);
    }
}

const manager = new Employee('manager', 10000);

console.log(manager.getSalary())

function raiseSalary(employee) {
    employee.setSalary(employee.getSalary() * 1.1);
}

manager.accept(raiseSalary);

console.log(manager.getSalary())

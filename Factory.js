// 工厂模式

/**
 * 开发者类
 * @param {string} name - 开发者的姓名
 */
function Developer(name) {
    this.name = name;
    this.type = 'Developer';
}

/**
 * 测试员类
 * @param {string} name - 测试员的姓名
 */
function Tester(name) {
    this.name = name;
    this.type = 'Tester';
}

/**
 * 员工工厂类，用于创建不同类型的员工
 */
function EmployeeFactory() {
    /**
     * 创建员工
     * @param {string} name - 员工的姓名
     * @param {number} type - 员工的类型（1：开发者，2：测试员）
     * @returns {Object} - 返回新创建的员工对象
     */
    this.create = (name, type) => {
        if (type === 1) {
            return new Developer(name);
        } else if (type === 2) {
            return new Tester(name);
        }
    }
}

/**
 * 打招呼函数
 */
function say() {
    console.log(`Hi,I am ${this.name} is a ${this.type}`);
}

// 创建员工工厂实例
const employeeFactory = new EmployeeFactory();

// 创建员工数组
const employees = [];

// 使用员工工厂创建不同类型的员工并添加到数组中
employees.push(employeeFactory.create('John', 1))
employees.push(employeeFactory.create('Sam', 2))
employees.push(employeeFactory.create('bob', 1))

employees.push(employeeFactory.create('kobe', 2))

// 遍历员工数组，调用打招呼函数
employees.forEach(employee => say.call(employee))

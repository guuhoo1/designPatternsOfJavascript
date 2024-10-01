// 设计模式

/**
 * 主题类，管理观察者并提供订阅、取消订阅和触发事件的方法
 */
function Subject() {
    // 存储观察者函数的数组
    this.observers = [];
}

// 扩展Subject的原型，添加方法
Subject.prototype = {
    /**
     * 订阅观察者
     * @param {Function} fn - 要订阅的观察者函数
     */
    subscribe: function (fn) {
        this.observers.push(fn);
    },
    /**
     * 取消订阅观察者
     * @param {Function} fn - 要取消订阅的观察者函数
     */
    unsubscribe: function (fn) {
        // 过滤出不等于指定函数的观察者数组
        this.observers = this.observers.filter(function (item) {
            if (item !== fn) return item;
        })
    },
    /**
     * 触发所有已订阅的观察者
     * 遍历每个观察者并调用它们
     */
    fire: function () {
        this.observers.forEach(function (item) {
            item.call();
        })
    }
}

// 创建一个新的主题实例
const subject = new Subject();

/**
 * 观察者1函数
 * 当被触发时，打印一条消息到控制台
 */
function Observer1() {
    console.log('Observer 1 firing')
}

/**
 * 观察者2函数
 * 当被触发时，打印一条消息到控制台
 */
function Observer2() {
    console.log('Observer 2 firing')
}

// 订阅Observer1和Observer2到主题
subject.subscribe(Observer1);
subject.subscribe(Observer2);
// 取消Observer1的订阅
subject.unsubscribe(Observer1);
// 触发所有当前订阅的观察者
subject.fire()

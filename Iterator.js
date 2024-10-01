// 迭代器模式
const items = [1, 'devsage', false, 1.24]

/**
 * 构造 Iterator 对象
 * @param {Array} items - 要迭代的项
 */
function Iterator(items) {
    this.items = items
    this.index = 0
}

// 为 Iterator 原型添加方法
Iterator.prototype = {
    /**
     * 判断是否还有更多的项
     * @returns {boolean} - 如果还有更多项则返回 true，否则返回 false
     */
    hasNext: function () {
        return this.items.length > this.index
    },
    /**
     * 获取当前项并移动到下一项
     * @returns {*} - 当前项
     */
    next: function () {
        return this.items[this.index++]
    }
}

// 创建一个新的 Iterator 实例
const iterator = new Iterator(items)

// 使用迭代器遍历项
while (iterator.hasNext()) {
    console.log(iterator.next())
}

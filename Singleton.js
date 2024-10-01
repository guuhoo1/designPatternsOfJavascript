// 单例模式
// 确保一个类只有一个实例，并提供一个全局访问点
// let instance = null
function Process(state) {
    // 构造函数初始化状态
    this.state = state
}

// 单例模式管理器
const Singleton = (function () {
    // 内部函数管理进程
    function ProcessManger() {
        // 初始化进程数量
        this.numProcess = 0
    }

    // 保存单例的实例
    let instance = null

    // 创建进程管理器的函数
    function createProcessManager() {
        // 实例化进程管理器
        instance = new ProcessManger()
        return instance
    }

    // 返回一个获取进程管理器实例的方法
    return {
        getProcessManager: function () {
            // 如果还没有实例，则创建一个
            if (!instance) {
                instance = createProcessManager()
            }
            // 返回实例
            return instance
        }
    }
})()

// 获取进程管理器实例
const processManger1 = Singleton.getProcessManager()
const processManger2 = Singleton.getProcessManager()

// 检查是否获取的是同一个实例
console.log(processManger1 === processManger2)

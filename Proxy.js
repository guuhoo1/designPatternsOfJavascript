// 代理模式

/**
 * 表示一个加密货币API，用于获取货币的当前价值
 */
function CryptoCurrencyApi() {
    /**
     * 获取指定货币的当前价值
     * @param {string} currency - 要获取价值的货币类型 ('BTC' 或 'ETH')
     * @returns {number} 返回指定货币的价值
     */
    this.getValue = function (currency) {
        // return 100;
        console.log('Getting value from API');
        switch (currency) {
            case 'BTC':
                return 100;
            case 'ETH':
                return 50;
            default:
                return 0;
        }
    }
}

/**
 * 为CryptoCurrencyApi提供代理服务，通过缓存结果来减少对API的直接调用次数
 * @param {CryptoCurrencyApi} api - 被代理的API实例
 */
function CryptoCurrencyProxy(api) {
    this.api = new CryptoCurrencyApi()
    this.cache = {}
    /**
     * 通过代理获取指定货币的当前价值
     * @param {string} currency - 要获取价值的货币类型 ('BTC' 或 'ETH')
     * @returns {number} 返回指定货币的价值，如果缓存中不存在，则从API获取并缓存
     */
    this.getValue = function (currency) {
        if (!this.cache[currency]) {
            this.cache[currency] = this.api.getValue(currency)
        }
        return this.cache[currency]
    }
}

// 创建一个代理实例，并使用它来获取货币价值
const proxy = new CryptoCurrencyProxy()
console.log(proxy.getValue('BTC'))
console.log(proxy.getValue('BTC'))
console.log(proxy.getValue('BTC'))

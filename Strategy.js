// 策略模式

/**
 * Fedex类，代表Fedex快递公司，提供运费计算功能
 */
function Fedex() {
    /**
     * 计算运费
     * @param {Object} pg - 包裹信息对象，包含来源、目的地和重量等信息
     * @returns {number} - 返回运费金额
     */
    this.calculate = pg => {
        return 2.45;
    }
}

/**
 * UPS类，代表UPS快递公司，提供运费计算功能
 */
function UPS() {
    /**
     * 计算运费
     * @param {Object} pg - 包裹信息对象，包含来源、目的地和重量等信息
     * @returns {number} - 返回运费金额
     */
    this.calculate = pg => {
        return 1.56;
    }
}

/**
 * USPS类，代表美国邮政服务，提供运费计算功能
 */
function USPS() {
    /**
     * 计算运费
     * @param {Object} pg - 包裹信息对象，包含来源、目的地和重量等信息
     * @returns {number} - 返回运费金额
     */
    this.calculate = pg => {
        return 4.5;
    }
}

/**
 * Shipping类，用于封装不同快递公司的运费计算策略
 */
function Shipping() {
    this.company = '';

    /**
     * 设置计算运费的策略（即选择快递公司）
     * @param {Object} company - 快递公司对象，可以是Fedex、UPS或USPS的实例
     */
    this.setStrategy = company => {
        this.company = company;
    }

    /**
     * 根据当前策略计算运费
     * @param {Object} pg - 包裹信息对象，包含来源、目的地和重量等信息
     * @returns {number} - 返回运费金额
     */
    this.calculate = pg => {
        return this.company.calculate(pg);
    }
}

// 创建各个快递公司实例
const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

// 创建一个包裹信息对象
const pg = {from: 'San Francisco', to: 'Miami', weight: 1.57};

// 直接使用各快递公司计算运费
fedex.calculate(pg);
ups.calculate(pg);
usps.calculate(pg);

// 创建Shipping实例，用于演示策略模式
const shipping = new Shipping();

// 设置策略为Fedex并计算运费
shipping.setStrategy(fedex);
console.log(`Fedex ${shipping.calculate(pg)}`);

// 设置策略为UPS并计算运费
shipping.setStrategy(ups);
console.log(`UPS ${shipping.calculate(pg)}`);

// 设置策略为USPS并计算运费
shipping.setStrategy(usps);
console.log(`USPS ${shipping.calculate(pg)}`);

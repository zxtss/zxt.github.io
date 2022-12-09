class global {
    constructor(date) {
        this.date = date;
    }
    //转换日期
    getTime() {
        var time = this.date ?? new Date();
        var year = time.getFullYear();
        var month = time.getMonth() < 9 ? '0' + time.getMonth() : time.getMonth() + 1;
        var day = time.getDate() < 9 ? '0' + time.getDate() : time.getDate() + 1;
        return `${year}-${month}-${day}`;
    }
    //类型检测
    type_detection(val) {
        /**
         * Object.prototype.toString覆写后会被污染
         * 所以call与bind一起用，防止原型污染
         */
        var str = Function.prototype.call.bind(Object.prototype.toString);
        return str(val);
    }
    //空对象检测
    null_detection(val) {
        var isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object
        return isEmpty(val)
    }
    //日期差值（天）
    date_ceil(date1, date2) {
        var daysBetween = (date1, date2) => Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24))
        return daysBetween(new Date(date1), new Date(date2));
    }
    //获取URL
    get_url(url) {
        var getParameters = (URL) => {
            URL = JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
            return JSON.stringify(URL);
        }
        return getParameters(url)
    }

}
// class classGlobal extends global {
//     constructor(date) {
//         super(date);
//     }
//     show() {
//         return this.getTime();
//     }

// }
let demo = new global();
console.log(demo.getTime())
console.log(demo.type_detection(11));
console.log(demo.null_detection({}))
console.log(demo.date_ceil('2021-12-12', '2022-01-02'))
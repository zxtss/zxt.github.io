; (function (undefined) {
    "use strict"
    var _global;

    function plugin() { }

    // Test data (do not use)
    plugin.prototype.demo = function () {
        return { code: 200, msg: '操作成功', data: { type: 1, comment: 12, content: 'The Test data', image: 'https://img1.baidu.com/it/u=722430420,1974228945&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500' } }
    }
    plugin.prototype.add = function (a, b) { return a + b }//add
    plugin.prototype.sub = function (a, b) { return Math.abs(a - b) }//subtraction
    plugin.prototype.mul = function (a, b) { return a * b }//The multiplication
    plugin.prototype.div = function (a, b) { return a / b }//division
    plugin.prototype.rem = function (a, b) { return a % b }//remainder
    plugin.prototype.getUrlParam = function (name) { return getUrlParam(name) }//Get all URL parameters
    plugin.prototype.copy = function (text) { return copyContent(text) }//copy content
    plugin.prototype.toast = function (text) { return showToast(text) }//Pop-up prompts
    plugin.prototype.stamp = function (type, time) { return stamp(type, time) }//time<=>timestamp
    plugin.prototype.userInfo = function () {
        return {
            "code": 200,
            "data": {
                "name": "patton",
                "QQ": "-------",
                "email": "----------"
            },
            "message": "success"
        }
    }
    //rolling scolltop
    plugin.prototype.rolling = function () {
        var timer = setInterval(function () {
            var left = window.pageYOffset;
            var step = Math.ceil((left - 0) / 10);
            window.scroll(0, left - step);
            if (left == 0) {
                clearInterval(timer);
            }
        }, 10);
    }

    //The countdown
    // plugin.prototype.countdown = function (timestamp) {
    //  return new Promise((resolve, reject) => {
    //      resolve()
    //  })
    // }
    //The rolling distance
    window.onscroll = function () {
        // console.log(document.documentElement.scrollTop || document.body.scrollTop)
    }

    //showToast
    function showToast(title) {
        var div = document.createElement('div');
        document.body.appendChild(div);
        div.style = `width: 100px;height: 50px;background: rgba(0,0,0,.5);display: flex;align-items: center;justify-content: center;color: #ffffff;border-radius: 5px;position:fixed;z-inde:999999;top:${document.body.scrollHeight / 2}px;left:${document.body.scrollWidth / 2}px;`
        div.innerText = title;
        setTimeout(() => {
            document.body.removeChild(div);
        }, 2000);
    }

    //copy content
    function copyContent(text) {
        showToast('复制成功');
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text);
        } else {
            var textarea = document.createElement('textarea');
            document.body.appendChild(textarea);
            textarea.style.position = 'fixed';
            textarea.style.clip = 'rect(0 0 0 0)';
            textarea.style.top = '10px';
            textarea.value = text;
            textarea.select();
            document.execCommand('copy', true);
            document.body.removeChild(textarea);
        }
    }
    //Time and timestamp conversion
    function stamp(type, time) {
        let date = time ? new Date(time) : new Date();
        // time=>timeStamp
        if (type == 'ts') return Math.round(date.getTime() / 1000);
        //timeStamp=>time
        if (type == 'date') {
            var time = time ? new Date(time) : new Date();
            var y = time.getFullYear();
            var M = time.getMonth() + 1;
            var d = time.getDate();
            var h = time.getHours();
            var m = time.getMinutes();
            var s = time.getSeconds();
            return y + '-' + (M < 9 ? '0' + M : M) + '-' + (d < 9 ? '0' + d : d) + ' ' + (h < 9 ? '0' + h : h) + ':' + (m <
                9 ? '0' + m : m) + ':' + (s < 9 ? '0' + s : s);
        }
    }
    //Gets the parameters after the URL
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    //Exposed to global objects(plugin)
    _global = (function () { return this || (0, eval)('this'); }())
    if (typeof module !== "undefined" && module.exports) {
        module.exports = plugin;
    } else if (typeof define === "function" && define.amd) {
        define(function () { return plugin; });
    } else {
        !('plugin' in _global) && (_global.plugin = plugin);
    }
}())
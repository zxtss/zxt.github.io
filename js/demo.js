// class demo{
//     constructor(){

//     }
// }

//惰性函数
function addEvent(type, element, fun) {
    if (element.addEventListener) {
        addEvent = function(type, element, fun) {
            element.addEventListener(type, fun, false);
        }
    } else if (element.attachEvent) {
        addEvent = function(type, element, fun) {
            element.attachEvent('on' + type, fun);
        }
    } else {
        addEvent = function(type, element, fun) {
            element['on' + type] = fun;
        }
    }
    return addEvent(type, element, fun);
}

function calculation() {
    for (var i = 1; i <= 9; i++) {
        console.log(i)
    }
    return true;
}
//异步执行
// async与await
async function isAlert() {
        let status = await calculation();
        let str = {
                a: 1,
                b: 2,
                c: 3
            },
            arr = [{
                a: 1,
                b: 2,
                c: 3
            }, {
                a: 6,
                b: 5,
                c: 4
            }];
        if (status) {
            console.log(~~3.9) //否
            console.log(Math.max.apply(Math, [11, 88, 2, 3, 4, 5, 6, 78]))
            console.log("异步执行完成")
            console.log(eval(3 + 4))
            console.log(str)
            console.log(delete str.a)
            console.log(delete arr[0].a)
            console.log(arr)
            for (var i = 0; i < 3; i++) {
                if (i === 1) continue;
                console.log(i)
            }

        }
    }

var serialnum={
    $n:0,
    get next(){
        return this.$n++;
    },
    set next(n){
        if(n>=this.$n){
            this.$n=n;
        }else{
            throw "===================="
        }

    }
};
serialnum.next=3
console.log("=======>",serialnum.next)
console.log("=======>",serialnum.next)

    //立即执行函数
    ~ function() {
        isAlert();
    }();
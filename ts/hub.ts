var webTitle: string = "动画特效";
var dataList: Object[] = [
    { title: " 淡入-从上", type: "a-fadeinT" },
    { title: "淡入-从右", type: "a-fadeinR" },
    { title: "淡入-从下", type: "a-fadeinB" },
    { title: "淡入-从左", type: "a-fadeinL" },
    { title: "淡出-向上", type: "a-fadeoutT" },
    { title: "淡出-向右", type: "a-fadein" },
    { title: "淡出-向下", type: "a-fadeoutB" },
    { title: "淡出-向左", type: "a-fadeoutL" },
    { title: "弹跳", type: "a-bounce" },
    { title: "弹入-从上", type: "a-bounceinT" },
    { title: "弹入-从右", type: "a-bounceinR" },
    { title: "弹入-从下", type: "a-bounceinB" },
    { title: "弹入-从左", type: "a-bounceinL" },
    { title: "弹出-向上", type: "a-bounceoutT" },
    { title: "弹出-向右", type: "a-bounceoutR" },
    { title: "弹出-向下", type: "a-bounceoutB" },
    { title: "弹出-向左", type: "a-bounceoutL" },
    { title: "转入-从左上", type: "a-rotateinLT" },
    // { title: "转入-从左下", type: "a-rotateinLB" },
    { title: "转入-从右上", type: "a-rotateinRT" },
    { title: "转入-从右下", type: "a-rotateinRB" },
    { title: "转出-向左上", type: "a-rotateoutLT" },
    { title: "转出-向左下", type: "a-rotateoutLB" },
    { title: "转出-向右上", type: "a-rotateoutRT" },
    // { title: "转出-向右下", type: "a-rotateoutRB" },
    { title: "翻入-X轴", type: "a-flipinX" },
    { title: "翻入-Y轴", type: "a-flipin a-flipinY" },
    { title: "翻出-X轴", type: "a-flipoutX" },
    { title: "翻出-Y轴", type: "a-flipout a-flipoutY" },
    { title: "闪烁", type: "a-flash" },
    { title: "震颤", type: "a-shake" },
    { title: "摇摆", type: "a-swing" },
    { title: "摇晃", type: "a-wobble" },
    { title: "震铃", type: "a-ring" },
];
let x: [string, number];
x = ['Runoob', 1];    // 元组
enum Color { Red, Green, Blue };
let c: Color = Color.Blue;//枚举
const nameSiteMapping = new Map();

// 设置 Map 对象
nameSiteMapping.set("Google", 1);


function greet(): string { // 返回一个字符串
    return "Hello World"
} 
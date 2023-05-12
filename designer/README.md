# Visor.js

Visor.js  是 [Visor在线设计师](https://www.visor.com.cn/designer) 的核心库代码. 是通过Canvas制作在线设计工具的基础, 包括

### visor.core.js 
在Canvas上制作在线绘图应用的核心基类文件. 支持鼠标的拖拽移动,伸缩,旋转和各种事件,支持手势操作.该文件里定义了两个基础对象 widget 和 presenter。

1、widgets对象是基于Canvas的基础控件对象，定义了很多基础属性、方法和事件，供开发者自定义控件时对属性进行设置和扩展。

2、presenter对象是展现和操作控制widget的画布对象，也定义了很多基础属性、方法和事件供开发者使用。

### visor.widgets.js
visor.js 提供了控件的扩展能力, 通过继承,重写其中属性方法等，实现在Canvas上制作各种效果的在线绘图应用。包括改变形状,背景图像,字体位置等等.
 
visor.widgets.js是 [Visor在线设计师](https://www.visor.com.cn/designer) 的一个控件库, 提供了各种扩展示例,通过参考该文件,可以让开发者快速熟悉开发扩展的控件.

visor.js 的[帮助文件](http://zhouyig.oschina.io/visor.js/help.html )

### 2018.2.28
  
v 2.0  基于Visor.js的在线设计器发布了

添加了更多的控件,包括流程,矢量图形,数据库,实体类和连线.

尝试[在线设计器](https://zhouyig.gitee.io/visor.js/)

试试[在线设计师](https://www.visor.com.cn/designer) 
 

对此项目有兴趣的朋友,可以加入QQ群702513196讨论. 
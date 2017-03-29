/**
 * Created by Hufp on 2017/3/29.
 */

//阻塞型IO 代码示例
var fs = require("fs");
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("程序执行结束！");
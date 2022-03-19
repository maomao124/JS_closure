/**
 * Project name(项目名称)：JS_closure
 * File name(文件名): test3
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 21:25
 * Version(版本): 1.0
 * Description(描述)： 无
 */

var funOne = (function ()
{
    var num = 0;
    return function ()
    {
        num++;
        return num;
    }
})();
console.log(funOne());      // 输出：1
console.log(funOne());      // 输出：2
console.log(funOne());      // 输出：3
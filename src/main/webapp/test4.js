/**
 * Project name(项目名称)：JS_closure
 * File name(文件名): test4
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 21:27
 * Version(版本): 1.0
 * Description(描述)： 无
 */

function funOne(i)
{
    function funTwo()
    {
        console.log('数字：' + i);
    }

    return funTwo;
}
var fa = funOne(110);
var fb = funOne(111);
var fc = funOne(112);
fa();       // 输出：数字：110
fb();       // 输出：数字：111
fc();       // 输出：数字：112
/**
 * Project name(项目名称)：JS_closure
 * File name(文件名): test2
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 21:22
 * Version(版本): 1.0
 * Description(描述)： 无
 */

function funOne()
{
    var num = 0;

    function funTwo()
    {
        num++;
        console.log(num);
    }

    return funTwo;
}

var fun = funOne();
fun();      // 输出：1
fun();      // 输出：2
fun();      // 输出：3
fun();      // 输出：4
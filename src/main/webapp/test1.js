/**
 * Project name(项目名称)：JS_closure
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/19
 * Time(创建时间)： 21:19
 * Version(版本): 1.0
 * Description(描述)： 无
 */

function funOne()
{    // 外部函数
    var num = 0;      // 局部变量
    function funTwo()
    {   // 内部函数
        num++;
        return num;
    }

    return funTwo;
}

var fun = funOne();             // 返回函数 funTwo


// 在 JavaScript 中，如果一个对象不再被引用，那么这个对象就会被 GC 回收，否则这个对象会一直保存在内存中。在上面的例子中，
// 内部函数 funTwo() 定义在外部函数 funOne() 中，因此 funTwo() 依赖于 funOne()，
// 而全局变量 fun 又引用了 funTwo()，所以 funOne() 间接的被 fun 引用。因此 funOne() 不会被 GC 回收，会一直保存在内存中
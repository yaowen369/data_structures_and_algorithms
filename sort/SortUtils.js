/**
 * Created by yw on 17/11/5.
 */


/**
 * 排序的工具类，包含 生成随机数组， 比较等 工具类
 * @constructor
 */
function SortUtils() {
    var array = [];

    var insert = function (item) {
        array.push(item);
    };

    this.toString = function () {
        return array.join();
    };

    //测试输出数组的内容
    this.testPrint = function () {
        var str = "";
        for (let i=0; i<array.length; i++){
            str += i + "->" + array[i] + "\t";
        }
        console.log(str);
    };

    //生成一个长度为size，最大值为maxVar（包含）的随机数
    this.getRandomArray = function (size, maxVar) {
        //先把之前的内容清空
        array = [];

        var num;
        for (let i=0; i<size; i++){
            // var num = Math.parseInt()
            num = Math.ceil(Math.random() * maxVar);
            array.push(num);
        }

        return array;
    };


    /**
     * 得到一个最大值为 maxVar（包含）的随机整数,
     * 如果传入的是两个参数或更多，则返回的整数是处于头两个参数中间的值
     * @param maxVar
     * @return {number}
     */
    this.getRandomInt = function (maxVar) {
        if (arguments.length == 0){
            console.error("getRandomInt（）方法传入的参数为0，这是要死人的节奏啊 ")
        }else if (arguments.length==1){
            return Math.ceil(Math.random() * maxVar);
        }else {
            var minVar;
            var maxVar;

            if (arguments[0] > arguments[1]){
                maxVar = arguments[0];
                minVar = arguments[1];
            }else {
                minVar = arguments[0];
                maxVar = arguments[1];
                //Todo 为什么下面这样写，就会出错
                // maxVar = arguments[1];
                // minVar = arguments[0];
                // 这样会导致 minVar和maxVar的值都为10， 但是why？
            }

            var diff = maxVar - minVar;
            return Math.ceil(Math.random()*diff) + minVar;
        }
    };


    //测试list的排序结果是否正确，（从小到大 排序）
    this.isSortRightFromSmallToBig = function (list) {
        var isRight = true;

        for (let i=0; i<list.length-1; i++){
            if (list[i] > list[i+1]){
                isRight = false;
                break;
            }
        }

        if (isRight){
            console.log("\t\t 正确 -> 这个list是  从小到大 排列的");
        }else {
            console.warn("\t\t 错误 -> 这个list  不是从小到大 排列的" );
        }
    };


    //试list的排序结果是否正确，（从大到下 排序）
    this.isSortRightFromBigToSmall = function(list) {
        var isRight = true;

        for (let i=0; i<list.length-1; i++){
            if (list[i] < list[i+1]){
                isRight = false;
                break;
            }
        }

        if (isRight){
            console.log("\t\t 正确 -> 这这个list是  从大到小 排列的");
        }else {
            console.warn("\t\t 错误 -> 这个list  不是从大到小 排列的" );
        }
    };
}

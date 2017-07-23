/**
 * Created by yw on 17/7/16.
 */


/**
 * 将十进制的 decNumber，转化为 base 进制，然后输出
 * @param decNumber
 * @param base  不能大于16，也就是说，最多是16进制
 */
function baseConverter(decNumber, base) {
    var mStack = new Stack();
    var digits = "0123456789ABCDEF";
    var rem = 0;
    var resultString = "";

    while (decNumber > 0){
        rem = Math.floor(decNumber%base);
        mStack.push(rem);
        decNumber = Math.floor(decNumber/base);
    }

    while (!mStack.isEmpty()){
        resultString += digits[mStack.pop()];
    }

    console.log(decNumber + " 转化为 " + base +" 进制为 = " + resultString);

}


function Stack() {

    var item = [];

    this.push = function (element) {
        item.push(element);
    };

    //弹出 栈顶元素
    this.pop = function () {
        return item.pop();
    };

    //查看 栈顶元素
    this.peek = function () {
        if (item.length === 0){
            return null;
        }else {
            return item[item.length - 1];
        }
    };

    this.isEmpty = function () {
        return item.length===0;
    };

    this.clear = function () {
        item = [];
    };

    this.size = function () {
      return item.length;
    };

    this.print = function () {
        console.log("size = " + item.length + "\t " + item.toString());
    }
}
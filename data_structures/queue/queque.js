/**
 * Created by yw on 17/7/23.
 */


function YwQueue() {
    var item = [];

    //向队列末尾添加一个或多个新的数据项
    //Todo 这个地方其实不应该这样，因为目前只能接收传入的多个参数的第一个，未来要做修改
    this.enqueue = function (elements) {
        item.push(elements);
    };

    //返回并删除队列的第一项
    this.dequeue= function () {
        return item.shift();
    };

    //返回（但并不删除）队列的第一项
    this.front = function () {
        return item[0];
    };

    //队列是否为空
    this.isEmpty = function () {
        return item.length===0 ? true : false;
    };

    //队列尺寸
    this.size = function () {
        return item.length;
    };

    this.print = function () {
        console.log("size = " + item.length + "\t " + item.toString());
    }
}
/**
 * Created by yw on 17/8/3.
 */

//队列
function LinkedList() {

    var Node = function (element) {
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null;

    //向队列末尾添加一个元素
    this.append = function () {

    };

    //向列表的制定位置插入一个 新的项
    this.insert = function (position, element) {

    };


    //从列表中移除一项
    this.remove = function (element) {

    };

    //返回元素在列表中的索引，如果该元素没有，则返回-1
    this.indexOf = function (element) {

    }

    //删除列表特定位置的元素
    this.removeAt = function (position) {

    };

    //返回列表是否为空
    this.isEmpty = function () {

    };

    //返回列表的长度
    this.size = function () {

    };


    //重写继承自JavaScript对象的toString方法，让其只输出元素的值
    this.toString = function () {

    };
}

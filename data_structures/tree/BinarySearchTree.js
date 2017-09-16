/**
 * Created by yw on 17/9/16.
 */

/**
 * 二叉搜索树
 * 第八章 树    P93
 * @constructor
 */
function BinarySearchTree() {
    //在其他项目中，我们称之为节点，但是在树中，我们称之为键
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    //向树中插入一个新的键
    this.insert = function (key) {

    };

    // 在树中查找一个键，如果节点存在，则返回true； 否则返回false
    this.search = function (key) {

    };

    //通过中序遍历方式 遍历所有节点
    this.inOrderTraverse = function () {


    };

    //通过先序遍历方式 遍历所有节点
    this.preOrderTraverse = function () {

    };

    //通过后序遍历方式遍历所有节点
    this.postOrderTraverse = function () {

    };

    //返回树中最小的值/键
    this.min = function () {

    };


    //返回树种最大的值/键
    this.max = function () {

    };

    //从树中 移除某个键
    this.remove = function (key) {

    };
}

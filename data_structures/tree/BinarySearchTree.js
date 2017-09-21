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

    var root = null;

    //向树中插入一个新的键
    this.insert = function (key) {
      if (root == null){
          root = new Node(key);
      }else {
          insertNode(root, key);
      }
    };

    var insertNode = function (parentNode , key) {
        if (key < parentNode.key){
            //插在左侧
            if (parentNode.left == null){
                parentNode.left = new Node(key);
            }else {
                insertNode(parentNode.left, key);
            }
        }else {  //插在右侧
            if (parentNode.right == null){
                parentNode.right = new Node(key);
            }else {
                insertNode(parentNode.right, key);
            }
        }
    };

    // 在树中查找一个键，如果节点存在，则返回true； 否则返回false
    this.search = function (key) {
      if (root == null){
          return false;
      } else {
          return searchNode(root, key);
      }
    };

    var searchNode = function (parentNode, key) {
        if (key === parentNode.key){
            return true;
        }else if (key < parentNode.key){
            //应该搜索左边
            if (parentNode.left == null){
                return false;
            }else {
                return searchNode(parentNode.left, key);
            }
        } else {
            //应该搜索右边
            if (parentNode.right == null){
                return false;
            }else {
                return searchNode(parentNode.right, key);
            }
        }
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

    //返回树中最小的值/键, 或则null，（root为null的情况下）
    this.min = function () {
        if (root == null){
            return null;
        }  else {
            if (root.left == null){
                return root.key;
            }else {
                return minInTree(root.left);
            }
        }
    };

    var minInTree = function (parentNode) {
        if (parentNode.left == null){
            return parentNode.key;
        }else {
            return minInTree(parentNode.left);
        }
    };

    //返回树中最大的值/键,或者 null。(root为null时)
    this.max = function () {
        if (root == null){
            return null;
        }else {
            if (root.right == null){
                return root.key;
            }else {
                maxInTree(root.right);
            }
        }
    };

    var maxInTree = function (parentNode) {
        if (parentNode.right == null){
            return parentNode.key;
        }else {
            maxInTree(parentNode.right);
        }
    };

    //从树中 移除某个键
    this.remove = function (key) {

    };
}

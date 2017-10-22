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
    //先访问左边节点，再访问父节点最后访问右边节点
    //@params callback 回调参数
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback);

    };

    var inOrderTraverseNode = function(node, callback){
        if (node != null){
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };

    //通过先序遍历方式 遍历所有节点
    //先访问父节点再访问左边节点，最后访问右边节点
    //@params callback 回调参数
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback);
    };

    var preOrderTraverseNode = function (node, callback) {
        if (node != null){
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };

    //通过后序遍历方式遍历所有节点
    //先访问左边节点，再访问右边节点，最后访问父节点
    //@params callback 回调参数
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback);
    };

    var postOrderTraverseNode = function(node, callback){
        if (node != null){
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };

    this.printKey = function (key) {
        console.log(key);
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
                return maxInTree(root.right);
            }
        }
    };

    var maxInTree = function (parentNode) {
        if (parentNode.right == null){
            return parentNode.key;
        }else {
            return maxInTree(parentNode.right);
        }
    };

    //从树中 移除某个键
    this.remove = function (key) {
        root = removeNode(root, key);
    };

    var removeNode = function (parentNode , key) {
        if (parentNode === null){
            return null;
        }

        if (key < parentNode.key){
            //在左边，就是 值比较小
            parentNode.left = removeNode(parentNode.left, key);
            return parentNode;
        }else if (key > parentNode.key){
            //在右边，就是值比较大
            parentNode.right = removeNode(parentNode.right, key);
            return parentNode;
        }else {
            //相等关系，需要删除的 就是这个节点
            //分为三种情况

            //该节点 没有child 节点，光秃秃的一个
            if (parentNode.left===null && parentNode.right===null){
                parentNode = null;
                return parentNode;
            }

            //该 节点只有一个 child节点
            if (parentNode.left!=null && parentNode.right===null){
                parentNode = parentNode.left;
                return parentNode;
            }else if (parentNode.left===null && parentNode.right!==null){
                parentNode = parentNode.right;
                return parentNode;
            }

            //该节点存在两个child节点
            var minInRight = findMinNode(parentNode.right);
            parentNode.key = minInRight.key;
            parentNode.right = removeNode(parentNode.right, minInRight.key);
            return parentNode;
        }

    };//end of "removeNode"

    var findMinNode = function (parentNode) {
        if (parentNode.left == null){
            return parentNode;
        }else {
            return findMinNode(parentNode.left);
        }
    };
}

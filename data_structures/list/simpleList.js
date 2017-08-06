/**
 * Created by yw on 17/8/3.
 */

//链表
function LinkedList() {

    var Node = function (element) {
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null;
    //??? 出于效率的考虑，是否也应该添加一个last变量，来指示最后一个元素呢。

    //向链表末尾添加一个元素
    this.append = function (element) {
        length++;
        if (head == null){
            var tmp = new Node(element);
            head = tmp;
            return;
        }

        //先找到最末尾的一个
        var last = head;
        while (last.next != null){
            last = last.next;
        }

        var lastNode = new Node(element);
        last.next = lastNode;
    };

    /**
     * 向列表的指定位置插入一个 新的项.
     * position > length : 插入到链表末尾
     * position < 0 : 插入到链表头部
     * @param position    想插入的位置
     * @param element     想插入的元素
     */
    this.insert = function (position, element) {
        //插入到 链表头部
       if (position <= 0){
           var tmpNode = new Node(element);
           tmpNode.next = head;
           head = tmpNode;
           length++;
           return;
       }

       //插入到 链表 末尾
        if (position >= length){
          var tmpNode = new Node(element);
          tmpNode.next = null;

          //找到最后一个
            var lastNode = head;
            while (lastNode.next != null){
                lastNode = lastNode.next;
            }

            lastNode.next = tmpNode;
            length++;
            return;
        }

        //插入到中间位置
        var count = 0;
        var prevNode = null;
        var posNode = head;
        while (count < position){
            prevNode = posNode;
            posNode = posNode.next;
            count++;
        }
        var needInsertNode = new Node(element);
        needInsertNode.next = prevNode.next;
        prevNode.next = needInsertNode;
        length++;
    };


    /**
     * 从队列中移除 某项。(只删除遍历所遇到的第一项)
     * @param element 要移除的元素
     * @return true: 移除成功
     *         false: 移除失败。（不存在这个元素）
     */
    this.remove = function (element) {
        //需要移除的正好是第一项
        if (head!==null && head.element===element){
            head = head.next;
            length--;
            return true;
        }


        var result = false;
        var tmpNode = head;
        var preNode = null;
        while (tmpNode!==null && tmpNode.element!==element){
            preNode = tmpNode;
            tmpNode = tmpNode.next;
        }

        if (tmpNode!==null){
            preNode.next = tmpNode.next;
            length--;
            result = true;
        }

        return result;
    };

    //返回元素在列表中的索引，如果该元素没有，则返回-1
    //从 0 开始计数
    this.indexOf = function (element) {
        var count = 0;
        var tmpNode = head;
        while (tmpNode!==null && tmpNode.element!==element){
            count++;
            tmpNode = tmpNode.next;
        }
       if (count<length && length!==0){
           return count;
       } else {
           return -1;
       }
    }

    /**
     *
     * 删除列表特定位置的元素
     * @param position
     * @return   删除的元素
     *           null : 删除失败(指定的位置不存在)
     */
    this.removeAt = function (position) {
        if (position<0 || position>=length){
            return null;
        }

        var deleteEle = null;
        //删除第一个
        if (position===0){
            deleteEle = head.element;
            head = head.next;
            length--;
            return deleteEle;
        }

        var preNode = null;
        var tmpNode = head;
        var count = 0;

        while (count < position){
            preNode= tmpNode;
            tmpNode = tmpNode.next;
            count++;
        }
        deleteEle = tmpNode.element;
        preNode.next = tmpNode.next;
        length--;
        return deleteEle;
    };

    //返回列表是否为空
    this.isEmpty = function () {
        if (length===0){
            return true;
        }else {
            return false;
        }
    };

    //返回列表的长度
    this.size = function () {
        return length;
    };


    //重写继承自JavaScript对象的toString方法，让其只输出元素的值
    this.toString = function () {
        var string = "队列长度=" + this.size();
        var tmpNode = head;
        var count = 0;
        while (tmpNode !== null){
            string += "\t" + count + "=" + tmpNode.element;
            count++;
            tmpNode = tmpNode.next;
        }

        console.log(string);
    };
}

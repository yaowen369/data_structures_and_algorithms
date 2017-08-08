/**
 * Created by yw on 17/8/7.
 */

function Set() {

    //并集，存在于集合A，或集合B中的元素
    this.union = function (otherSet) {
        var unionSet = new Set();

        var arrThis = this.values();
        for (let data in arrThis){
            unionSet.add(arrThis[data]);
        }


        var arrOther = otherSet.values();
        for (let i in arrOther){
            unionSet.add(arrOther[i]);
        }

        return unionSet;
    };

   //交集， 即存在于集合A，也存在于集合B中的元素
    this.intersection = function (otherSet) {
        var timeStart = new Date().getTime();
        var interSet = new Set();

        var arrThis = this.values();
        var arrOther = otherSet.values();

        for (let i in arrThis){
            for (let j in arrOther){
                if (arrThis[i] === arrOther[j]){
                    interSet.add(arrThis[i]);
                }
            }
        }

        console.log("双重循环 交集 -> 耗时 =" + (new Date().getTime()-timeStart));
        return interSet;
    };

    //交集， 采用另一种算法实现而已
    this.intersection_2 = function (otherSet) {
        var timeStart = new Date().getTime();
        var interSet = new Set();

        var arrThis = this.values();
        // var arrOther = otherSet.values();

        for (let i in arrThis){
            if (otherSet.has(arrThis[i])){
                interSet.add(arrThis[i]);
            }
        }

        console.log("利用has方法 交集 -> 耗时 =" + (new Date().getTime()-timeStart));
        return interSet;
    };

    //差集，存在于集合A中，不存在于集合B中。
    this.different = function (otherSet) {
        var timeStart = new Date().getTime();

        var diffSet = new Set();

        var arrThis = this.values();
        var arrOther = otherSet.values();

        for (let i in arrThis){
            var contain = false;
            for (let j in arrOther){
                if (arrThis[i] === arrOther[j]){
                    contain = true;
                }
            }

            if (!contain){
                diffSet.add(arrThis[i]);
            }
        }
        console.log("双重循环 交集 -> 差集 =" + (new Date().getTime()-timeStart));
        return diffSet;
    };


    //差集,  采用另一种算法而已
    this.different_2 = function (otherSet) {
        var timeStart = new Date().getTime();

        var diffSet = new Set();

        var arrThis = this.values();
        // var arrOther = otherSet.values();

        for (let i in arrThis){

            if (!otherSet.has(arrThis[i])){
                diffSet.add(arrThis[i]);
            }
        }
        console.log("利用has函数 交集 -> 差集 =" + (new Date().getTime()-timeStart));
        return diffSet;
    };

    //如果B是A的子集，则返回true。。。 否则返回false
    this.subSet = function (otherSet) {

       var arrThis = this.values();
       var arrOther = otherSet.values();

       for (let i in arrOther){
           var contain = false;

           for (let j in arrThis){
               if (contain){
                   break;
               }
               if (arrThis[i] === arrOther[j]){
                   contain = true;
               }
           }

          if (!contain){
               return false;
          }
       }
        return true;
    };




    var items = {};

    //如果值在集合当中，返回true，否则返回false
    this.has = function (value) {
        return items.hasOwnProperty(value);
    };


    //向结合中添加一个新的项.  添加成功返回true，否则返回false。
    this.add = function (value) {
        if (!this.has(value)){
            items[value] = value;
            return true;
        }
        return false;
    };

    //从集合中移除一个值.
    this.remove = function (value) {
        if (this.has(value)){
            delete items[value];
            return true;
        }
        return false;
    };


    //移除集合中所有的项
    this.clear = function () {
        items = {};
    };

    //返回集合中包含元素的数量
    this.size = function () {
        return Object.keys(items).length;
    };

    //返回一个包含集合中所有值的数组
    this.values = function () {
        return Object.keys(items);
    };
}

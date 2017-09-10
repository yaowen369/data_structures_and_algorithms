/**
 * Created by Administrator on 2017/9/7.
 */

/**
 * 74.2.1  p80
 * 散列表
 *
 *   采用 第二种  线性探测的方式来解决 冲突 p87
 */
function HashTable() {
    var table = [];

    //计算出 hash 的值
    var loseLoseHashCode = function (key) {
        var hash = 0;
        for (let i=0; i<key.length; i++){
            hash += key.charCodeAt(i);
        }
        return  hash%37;
    };

    var valuePair = function (key, value) {
      this.key = key;
      this.value = value;

      this.toString = function () {
        return "[" + key + ":" + value + "]";
      };
    };

    //向散列表中增加一个新的项
    this.put = function (key, value) {
        var position = loseLoseHashCode(key);

        if (table[position] == undefined){
            table[position] = new valuePair(key, value);
        } else {
            //在当前位置的基础上，向后续
            position++;
            while (table[position] != undefined){
                position++;
            }
            table[position] = new valuePair(key, value);
        }
    };


    //返回 根据键值检索到的 特定的值,  没有则返回  null
    this.get = function (key) {
        var position = loseLoseHashCode(key);

        if (table[position] != undefined){
            if (table[position].key === key){
                return table[position].value;
            }else {
                /**
                 * 在这本上的 是下面这样写的。
                 *   while (table[index]===undefined || table[index].key!==key){
                 *      index++;
                 *  }
                 *
                 * 判断条件是错的, 比如我们这样设置 :
                 * var table = new HashTable();
                 * table.put("Jonathan", "Jona__")
                 * table.put("Mindy", "Mindy__")
                 * table.put("Paul", "Paul__")
                 * table.put("Jamie", "Jamie__")
                 * table.put("Sue", "Sue__")
                 *
                 *
                 * 打印出来的log如下:
                 *
                 *  5=[Jonathan:Jona__]->hash计算结果=5	 6=[Jamie:Jamie__]->hash计算结果=5	 7=[Sue:Sue__]->hash计算结果=5
                 *  32=[Mindy:Mindy__]->hash计算结果=32	 33=[Paul:Paul__]->hash计算结果=32
                 *
                 *  现在知道了各个hash值，我们重新设置 把 最后一个 Sue 去掉， 然后get时，却get("Sue"),此时就会形成死循环
                 *
                 */
                var index = ++position;
                while (table[index]!==undefined && table[index].key!==key){
                    index++;
                }
                console.log("get() 方法,遍历的index = " + index + "\t table[index]=" + table[index]);

                if (table[index]!==undefined && table[index].key === key){
                    return table[index].value;
                }
                return null;
            }
        }

        return null;
    };

    // 根据 键值 从散列表中 移除值, true表示移除成功，false表示不存在该元素
    this.remove = function (key) {
        var position = loseLoseHashCode(key);

        if (table[position] === undefined){
            return false;
        }else {
            //这个位置上存在元素
            while (table[position]!==undefined && table[position].key!==key){
                position++;
            }

            if (table[position] === undefined){
                return false;
            }else {
                //根据上面一系列判断条件，我们可以确定，此时 table[position].key === key;
                // 我们要做的,  并不是简单的把这个位设置为 undefined,而是 把它后面的元素向前移动。
                var backIndex = position + 1;
                var backIndexHashCode = 0;
                if (table[backIndex] !== undefined){
                    backIndexHashCode = loseLoseHashCode(table[backIndex].key);
                }else {
                    table[position] = undefined;
                    return true;
                }

                while (table[backIndex]!==undefined && backIndexHashCode<backIndex){
                    table[backIndex-1] = table[backIndex];
                    backIndex++;
                    if (table[backIndex] !== undefined) {
                        backIndexHashCode = loseLoseHashCode(table[backIndex].key);
                    }

                }

                table[backIndex-1] = undefined;
                return true;

            }
        }
    };



    //供debug的信息
    this.toString = function () {
        var str = "";
        for (let i=0; i<table.length; i++){
            if (table[i] == undefined){
                continue;
            }
            str += "\t " + i + "=" + table[i] + "->hash计算结果="  + loseLoseHashCode(table[i].key);
        }
        console.log(str);
    };
}
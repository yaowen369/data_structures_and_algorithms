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
                var index = ++position;
                while (table[index]===undefined || table[index].key!==key){
                    index++;
                }
                if (table[index].key === key){
                    return table[index].value;
                }
            }
        }

        return null;
    };

    // 根据 键值 从散列表中 移除值, true表示移除成功，false表示不存在换个元素
    this.remove = function (key) {

    };



    //供debug的信息
    this.toString = function () {
        var str = "";
        for (let i=0; i<table.length; i++){
            if (table[i] == undefined){
                continue;
            }
            str += "\t " + i + "=" + table[i] + "->" + loseLoseHashCode(table[i].key);
        }
        console.log(str);
    };
}
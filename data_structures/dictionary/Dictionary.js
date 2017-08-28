/**
 * Created by yw on 17/8/13.
 */


function Dictionary() {
    //存储 键值对
    var items = {};
    
    //向字典中 添加新元素
    this.set = function (key, value) {
        items[key] = value;
    };

    //通过使用健值，来从字典中移除对应的数据值
    this.remove = function remove(key) {
        delete items[key];
    };

    //该健值是否存在该字典中
    this.has = function (key) {
        return items.hasOwnProperty(key);
    };


    //查找健值对应的元素并返回,不存在则返回null
    this.get = function (key) {
        var value = items[key];
        if (typeof value === "underfined"){
            return null;
        }else {
            return value;
        }
    };

    //将字段中所有的元素全部清空
    this.clear = function () {
        items = {};
    };

    //返回字典中所包含的元素的数量， 等同于数组的length
    this.size = function () {
        //不知道这种方法对不对
        return items.keys().length;
    };

    //将字典所包含的所有键名 以 数组形式返回
    this.keys = function () {
        return items.keys();
    };

    // 将字典中所包含的值 以数组形式返回 
    this.values = function () {
        return items.values();
    };

    //debug 信息，将 字典里的 键值对，依次打印出来
    this.debugPrint = function () {
        
    }
}
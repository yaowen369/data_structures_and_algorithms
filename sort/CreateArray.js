/**
 * Created by yw on 17/11/5.
 */

function CreateArray() {
    var array = [];

    this.insert = function (item) {
      array.push(item);
    };

    this.toString = function () {
        return array.join();
    };

    this.createRandomArray = function (size, maxVar) {
        var num;
        for (let i=0; i<size; i++){
            // var num = Math.parseInt()
        }
    };
}
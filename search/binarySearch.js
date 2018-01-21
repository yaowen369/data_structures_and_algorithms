/**
 * Created by yw on 18/1/21.
 */

//二分搜索，针对已经排好序的数组


function BinarySearchUtils() {
    var arr;

    this.binarySearch = function (item) {

        var low = 0,
            high = arr.length - 1,
            mid,
            element;


        while (low <= high){
            mid = Math.floor((low+high)/2);

            element = arr[mid];
            if(element < item){
                low = mid + 1;
            }else if (element > item){
                high = mid - 1;
            }else {
                return mid;
            }

            return -1;

        }
    };
}
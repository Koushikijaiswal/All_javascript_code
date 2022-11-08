function binarySearch(arr, low, high, element) {

    let mid = parseInt((low + high)/2);

    if(low > high) {
        return -1;
    }

    if(arr[mid] === element) {
        return mid;
    } else if(arr[mid] > element) {
        return binarySearch(arr, low, mid-1, element);
    } else {
        return binarySearch(arr, mid+1, high, element);
    }

}

console.log(binarySearch([1, 4, 6, 9, 10, 15], 0, 5, 10));


function rotatedAndSorted(arr, low, high) {

    if(low == high) {
        return arr[low];
    }

    if(low > high) {
        return arr[0];
    }

    let mid = parseInt((low + high) / 2);


    // smallest element.
    if(mid < high && arr[mid+1] < arr[mid]) {
        return arr[mid+1];
    }

    if(mid > low && arr[mid-1] > arr[mid]) {
        return arr[mid];
    }
    //left part
    if((arr[low] < arr[high]) || 
    (arr[low] > arr[high] && arr[mid] < arr[high])) {
        return rotatedAndSorted(arr, low, mid-1);
    } else {
        return rotatedAndSorted(arr, mid+1, high);
    }
}

console.log(rotatedAndSorted([1, 2], 0, 1));
function binarySearch(arr,target){
    let left = 0
    let right = arr.length-1
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(arr[mid]===target){
            return mid
        }else if(arr[mid]<target){
            left = mid+1
        }else{
            right = mid-1
        }
    }
    return -1
}

const arr =[10,5,50,7,41]
console.log(binarySearch(arr,50));
console.log(binarySearch(arr,88));


function rec(arr1, target1, left1, right1) {
    if (left1 > right1) {
        return -1;
    }
    let mid1 = Math.floor((left1 + right1) / 2);
    if (arr1[mid1] === target1) {
        return mid1;
    } else if (arr1[mid1] < target1) {
        return rec(arr1, target1, mid1 + 1, right1);
    } else {
        return rec(arr1, target1, left1, mid1 - 1);
    }
}

const arr2 = [33, 44, 55, 66, 70, 88, 99]; // Sorted array
console.log(rec(arr2, 70, 0, arr2.length - 1)); // Output: 0
console.log(rec(arr2, 8, 0, arr2.length - 1));  // Output: -1

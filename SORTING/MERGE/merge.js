// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     const mid = Math.floor(arr.length/2)
//     const leftArr = arr.slice(0,mid)
//     const rightArr = arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }


// function merge(leftArr,rightArr){
//     const sortedArr = []
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0]<=rightArr[0]){
//         sortedArr.push(leftArr.shift())
//     }else{
//         sortedArr.push(rightArr.shift())
//     }
// }
// return [...sortedArr,...leftArr,...rightArr]
// }

// const arr = [10,8,9,-66,-8,96,33,-74]
// console.log(mergeSort(arr));


function mergeSort(arr){
    if(arr.length<2){
        return arr
    }

    const mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}


function merge(left,right){
    const sort = []
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sort.push(left.shift())
        }else{
            sort.push(right.shift())
        }
    }
    return [...sort,...left,...right]
}



const arr = [10,3,56,-1,-56,8]
console.log(mergeSort(arr));

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found
}

// Test cases
const arr = [3, 5, 7, 9, 11, 13, 15];
console.log(linearSearch(arr, 7));  
console.log(linearSearch(arr, 13));
console.log(linearSearch(arr, 4));  


//using recursion
function rec(array,tar,index=0){
    if(index===array.length){
        return -1
    }
    if(array[index]===tar){
        return index
    }
    return rec(array,tar,index+1)
}
const array = [40,8,5,99]
console.log(rec(array,5));
console.log(rec(array,(9)));
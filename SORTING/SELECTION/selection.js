function selection(arr){
    for(let i = 0;i<arr.length;i++){
        minIndex = i

        for(let j = i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex!=i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

const arr = [10,20,3,-2,-4,-23,52]
console.log(selection(arr));

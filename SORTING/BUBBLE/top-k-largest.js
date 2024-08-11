function bubble(arr,k){
    let n = arr.length 
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1-i;j++){
            if(arr[j]<arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

            }
        }
    }
    return arr.slice(0,k)
}

let arr = [99,-4,88,55,2,44,78,961]
console.log(bubble(arr,4));

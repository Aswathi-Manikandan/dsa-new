function insertion(arr){
    
    for(let i=1;i<arr.length;i++){
        let numbertoinsert = arr[i]
        let j = i-1
        while(j>=0 && arr[j]>numbertoinsert){
            arr[j+1] = arr[j]
            j=j-1
        }
        arr[j+1] = numbertoinsert
    }
}
const arr = [8,20,-2,-99,-6]
insertion(arr);
console.log(arr);


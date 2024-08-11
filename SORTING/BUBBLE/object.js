function bubble(arr,prop){
    let n = arr.length
    for(let i = 0;i<n-1;i++){
        for(let j=0;j<n-1-i;j++){
            if(arr[j][prop]>arr[j+1][prop]){
                let temp = arr[j]
                arr[j]  = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

let people= [
    {
        name:'aswathi',age:23},

        {name: 'zera',age:12},
        {name:'diya',age:33},
        {name:'anu',age:14}
    
]

console.log(bubble(people,"name"));

//fibonacci

function fib(n){
    if(n<=1){
        return n
    }
    return fib(n-1) + fib(n-2)
}

console.log(fib(5));
console.log(fib(2));
console.log(fib(10));

//factorial

function fact(n){
    if(n===0){
        return 1
    }
    return n*fact(n-1)
}

console.log(fact(5));
console.log(fact(10));


//array sum 
function arrsum(arr){
    if(arr.length === 0){
        return 0
    }
    return arr[0]+arrsum(arr.slice(1))
}
console.log(arrsum([1,2,4,5,6]));
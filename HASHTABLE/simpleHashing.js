function simpleHash(key,tablesize){
    let hash = 0

    for(let i=0;i<key.length;i++){
        hash+=key.charCodeAt(i)
    }
    return hash%tablesize
}

let key = "aswathi"
let tablesize = 10
console.log(simpleHash(key,tablesize));

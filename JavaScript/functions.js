let facto = function (n) {
    if (n === 0){
        return 1;
    }
    else{
        return n * facto(n-1)
    }
}

let fibo = function (n) {
    if (n <= 1){
        return 1;
    }
    else{
        return fibo(n-1)+fibo(n-2)
    }
}

console.log(facto(5))
console.log(fibo(15))
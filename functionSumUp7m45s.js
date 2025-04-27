function sumUp(n){
    let result = 0
    const start = performance.now()
    for(let i = 1; i <= n; i++){
        result = result + i
    }
    const end = performance.now()
    console.log(end-start)
    return result
}
console.log(sumUp(10000000000))
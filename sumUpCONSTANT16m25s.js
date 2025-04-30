function sumUp(n){
    const start = performance.now()
    console.log((n/2) * (1 + n))
    console.log(performance.now() - start)
}

sumUp(100000000000000000000000)
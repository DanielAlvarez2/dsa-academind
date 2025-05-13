const arr = []
const arraySize = Math.floor(Math.random() * 5) + 1
for (let i = 0; i < arraySize; i++){
    arr.push(Math.floor(Math.random() * 100) + 1)
}
function arraySum(arr){
    let sum = 0
    for (let i=0; i<arr.length;i++){
        sum = sum + arr[i]
    }
    console.log(sum)
}
arraySum(arr)
console.log(arr)

// Big O(n)
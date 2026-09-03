// Sum of first 10 number

function main(){
    sumOfFirstTenNumbers(20)
}

main()

function sumOfFirstTenNumbers(num){
    let count = 0
    let sum = 0

    while(count<num){
        sum+=count
        count++
    }

    console.log(`Summation of first `,count,` is `,sum)
}
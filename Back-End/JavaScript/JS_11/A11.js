function main(){
    
    const marks = [12, 23, 34, 45, 67, 78, 89,96]
    
    console.log(`Average of given array is `,findAvg(marks))

    console.log(`Biggest value in given array is `,biggestValue(marks))

    console.log(`Smallest value in given array is `,smallestValue(marks))
}

main()

function findAvg(marks){
    let sum = 0;
    for(i=0 ; i<marks.length ; i++){
        sum += marks[i]
    }
    return (sum/marks.length)
}

function biggestValue(marks){
    let big = marks[0]
    for(i=0 ; i<marks.length ; i++){
        if(big<marks[i]){
            big=marks[i]
        }
    }
    return(big)
}

function smallestValue(marks){
    let small = marks[0]
    for(i=0 ; i<marks.length ; i++){
        if(small>marks[i]){
            small=marks[i]
        }
    }
    return(small)
}
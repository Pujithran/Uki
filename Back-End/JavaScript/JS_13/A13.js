function main(){
    let studentMarks = [
    ["Paul",75,80,85,90,95],
    ["Human",46,45,85,65,54],
    ["Abigail",79,95,95,95,45],
    ["Pujithran",95,78,58,97,75]
    ]

    avgMarks(studentMarks)

    highestMarks(studentMarks)
}

function avgMarks(x){
    
    for(i=0; i<x.length; i++){
        let avg = 0
        let total = 0
        for(j=1; j<x[0].length; j++){
            total += x[i][j]        
        }
        avg = total/(x[0].length-1)
        console.log(`Total marks of `,x[i][0],` is `,total,` and average is `,avg)
    }

}

function highestMarks(x){

    for(i=1; i<x[0].length; i++){
        let high = x[0][1]
        for(j=0; j<x.length; j++){
            if(high<x[i][j]){
                high = x[i][j]
            }
        }
    }
    console.log(high)
}

main()
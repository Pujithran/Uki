function mulTable(length){
    for (let i = 1 ; i<=length ; i++){
        let rowVal = ""
        for (let j = 1 ; j<=length ; j++){
            rowVal+=(i*j + '\t')
        }
        console.log(rowVal)
    }
}

mulTable(999999)
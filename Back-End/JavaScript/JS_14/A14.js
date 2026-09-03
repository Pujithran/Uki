function main1(){

    const mat = [
        [2,3,4],
        [5,6,8],
        [8,2,8]
    ]

    multiplicationOfMatrixWithNumber(mat , "+" , 4)
}

function multiplicationOfMatrixWithNumber(x, y, z){
    let res = 0;

    switch (y){
        case "+":

        for(i=0 ; i<x.length ; i++){
            for(j=0 ; j<x[0].length ; j++){
                x[i][j] = x[i][j] + z
            }
        }

        break;

        case "-":

        for(i=0 ; i<x.length ; i++){
            for(j=0 ; j<x[0].length ; j++){
                x[i][j] = x[i][j] - z
            }
        }

        break;

        case "/":

        for(i=0 ; i<x.length ; i++){
            for(j=0 ; j<x[0].length ; j++){
                x[i][j] = x[i][j] / z
            }
        }

        break;

        case "*":

        for(i=0 ; i<x.length ; i++){
            for(j=0 ; j<x[0].length ; j++){
                x[i][j] = x[i][j] * z
            }
        }

        break;
    }

    console.table(x)

}

main1();

function main2(){

    const matA = [
        [2,3,6,7],
        [6,3,6,1],
        [8,3,8,9]
    ]

    const matB = [
        [8,4,8],
        [4,9,1],
        [2,7,2],
        [4,8,1]
    ]

    multiplicationOfMatrixWithMatrix(matA, matB)    
}


function multiplicationOfMatrixWithMatrix(x, z){
    if (x[0].length === z.length) {
        const res = Array.from({ length: x.length }, () => Array(z[0].length).fill(0));

        for (let i = 0; i < x.length; i++) {
            for (let j = 0; j < z[0].length; j++) {
                for (let k = 0; k < x[0].length; k++) {
                    res[i][j] += x[i][k] * z[k][j];
                }
            }
        }

        console.table(res);
    }

    else {
        console.log("These two matrix can't be multiplied");
    }
}

main2()
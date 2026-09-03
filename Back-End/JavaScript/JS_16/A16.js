const number = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

console.log(number[4])

for(i=0 ; i<number.length ; i++){
    sum += number[i]
}

console.log(sum)

let lar = number[0]
for(i=0 ; i<number.length ; i++){
    if(lar<number[i]){
        lar = number[i]
    }
}

console.log(lar)

const numbers=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let big = numbers[0][0]
for(i=0; i<numbers.length; i++){
    for(j=0; j<numbers[0].length; j++){
        if(big<numbers[i][j]){
            big = numbers[i][j];
        }
    }
}

console.log(big)

for(i=0; i<numbers.length; i++){
    for(j=0; j<numbers[0].length; j++){
        if(numbers[i][j]%2 == 1){
            console.log(numbers[i][j])
        }
    }
}

const noRepeat = [1,2,2,3,3,4,5,6,7,8,8]

const repeatless = []

for(i=0; i<noRepeat.length; i++){
    for(j=0; j<noRepeat.length; j++){
        if(noRepeat[i] != noRepeat[j]){
            repeatless.push(noRepeat[i])
        }
    }
}

console.log(repeatless)

const x = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const z = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const res = Array.from({ length: x.length }, () => Array(z[0].length).fill(0));

for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < z[0].length; j++) {
        for (let k = 0; k < x[0].length; k++) {
            res[i][j] += x[i][k] * z[k][j];
        }
    }
}

console.table(res)
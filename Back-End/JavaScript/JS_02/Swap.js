swap(1,2)

function swap(A, B){
    let temp=0

    console.log("Before swap A is "+A)
    console.log("Before swap B is "+B)

    temp=A
    A = B
    B = temp

    console.log("Post swap A is "+A)
    console.log("Post swap B is "+B)
}
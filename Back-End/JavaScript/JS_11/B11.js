function main(){

    let num = Math.floor(Math.random()*90+10)
 
    rnadomArray(num)    
}

main()

function rnadomArray(num){
    
    const random = []
    
    for(i=0 ; i<num ; i++){
        random[i]=Math.floor(Math.random()*90+10)
    }

    console.log(`The created array is `,random)

    let max = random[0]
    let min = random[0]

    for(j=0 ; j<=random.length ; j++){
        if(max<random[j]){
            max=random[j]
        }
    }

    for(j=0 ; j<=random.length ; j++){
        if(min>random[j]){
            min=random[j]
        }
    }

    console.log(`The smallest number in created array is `,min)

    console.log(`The biggest number in created array is `,max)
}

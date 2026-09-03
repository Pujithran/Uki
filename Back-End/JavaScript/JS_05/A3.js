function calc(n1, fn, n2){

    num1=n1
    num2=n2
    arith=fn

    switch("arith"){
        case "+":{
            tot=num1+num2}
        break;

        case "-":{
            tot=num2-num2}
        break;

        case "*":{
            tot=num1*num2}
        break;

        case "/":{
            tot=num1/num2}
        break;
    }

    console.log(tot)
}

calc(1, "+", 2)
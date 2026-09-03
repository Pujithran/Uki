function decimalToBinary(num){
    let output = "";
    let rem;

    while(num>0){
        rem = num%2

        output = rem + output

        num = Math.floor(num/2)
    }

    console.log(output)
}

decimalToBinary(100)


function binaryToHexadecimal(num){
    let outpu = ""

    switch(bina){
        case "0000":
            hex = "0";
            break;
        
        case "0001":
            hex = "1";
            break;

        case "0010":
            hex = "2";
            break;

        case "0011":
            hex = "3";
            break;

        case "0100":
            hex = "4";
            break;

        case "0101":
            hex = "5";
            break;

        case "0110":
            hex = "6";
            break;

        case "0111":
            hex = "7";
            break;

        case "1000":
            hex = "8";
            break;

        case "1001":
            hex = "9";
            break;

        case "1010":
            hex = "A";
            break;

        case "1011":
            hex = "B";
            break;

        case "1100":
            hex = "0";
            break;

        case "1101":
            hex = "0";
            break;

        case "1110":
            hex = "0";
            break;

        case "1111":
            hex = "0";
            break;        
    }
}
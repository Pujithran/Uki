function Number(num){
    let number = num

    if(number >= 0){
        console.log("Given Number is positive")
    }

    else{
        console.log("Given Number is Negative")
    }
}

Number(-3)




function OOE(num){
    Number=num
    
    if (Number % 2 == 0){
        console.log("Given number is Even")
    }

    else{
        console.log("Given number is Odd")
    }
}

OOE(6)



function MultiplesOfFive(num){
    Number = num 

    if (Number % 5 == 0){
        console.log("The given number can be divided by Five")
    }

    else{
        console.log("The given number can not be divided by Five")
    }
}

MultiplesOfFive(20)



function CelsiusToFahrenheit(Cel){
    Celsius = Cel
    Fahrenheit = 0

    Fahrenheit = (Celsius*9/5) + 32

    console.log(Celsius+"°C is equal to "+Fahrenheit+"°F")
}
    
CelsiusToFahrenheit(36)


function Grade(marks){
    score = marks
    result = 0

    if(score > 100){
        console.log("Invalid Score")
    }

    else if(score > 80){
        console.log("A grade")
    }

    else if(score > 70){
        console.log("B grade")
    }

    else if(score > 60){
        console.log("C grade")
    }

    else if(score > 50){
        console.log("D grade")
    }

    else if(score > 0){
        console.log("F grade")
    }

    else{
        console.log("Invalid Score")
    }

}

Grade(82)
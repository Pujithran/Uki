// Judging Triangle 

function Triangle(S1, S2, S3){
    
    if (S1 === S2 && S2 === S3){
        console.log("Equilateral triangle")
    }

    else if (S1 === S2 || S1 === S3 || S2 === S3){
        console.log("Isosceles triangle")
    }

    else {
        console.log("Scalene triangle")
    }
}

Triangle(1,2,3)



// Finding leap year

function leapYear(Yr){

    if ((Yr % 4 == 0 && Yr % 100 != 0) || Yr % 400){
        console.log("Leap year")
    }

    else {
        console.log("Not Leap Year")
    }
}

leapYear(2024)



// BMI calculator

function BMI(Hi, We){
    bmi= We / (Hi)**2
    console.log("BMI = "+bmi)
}

BMI(1.75, 58)
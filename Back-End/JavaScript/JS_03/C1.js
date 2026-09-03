// Electricity bill calculator

function bill(unit){
    
    fixed=0

    rate=0

    total=0

    temp=0

    multi=0
    
    if (unit > 0 && unit < 60){
        
        if (unit < 30){
            multi=0
            fixed=80
            rate=5
        }
        
        else{
            multi=30*5
            temp=unit-30
            fixed=120
            rate=9
        }
    
    }

    else if (unit >= 60){

        if (unit == 60){
            fixed=0
            rate=14
        }

        else if (unit < 90){
            multi=60*14
            temp=unit-60
            fixed=400
            rate=20
        }

        else if (unit < 120){
            multi=60*14 + 30*20
            temp=unit-90
            fixed=1000
            rate=28
        }

        else if (unit < 180){
            multi=60*14 + 30*20 + 30*28
            temp=unit-120
            fixed=1500
            rate=44
        }

        else {
            multi=60*14 + 30*20 + 30*28 + 60*44
            temp=unit-180
            fixed=2100
            rate=85
        }
    
    }

    total = (rate*temp) + fixed + multi

    console.log("Your total bill is "+total+".Rs")

}

bill(200)
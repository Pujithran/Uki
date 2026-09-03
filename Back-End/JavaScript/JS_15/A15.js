function accessGranter(name){
    if(name == "Staff" || name == "Teacher" || name == "Student" ){
        console.log("Access Granted")
    }

    else{
        console.log("Veliya poda")
    }
}

accessGranter("paul")

function accessGranterVTwo(name){
    switch (name){
        case "Staff":{
            console.log("Access Granted")
            return;
        }

        case "Teacher":{
            console.log("Access Granted")
            return;
        }

        case "Studenet":{
            console.log("Access Granted")
            return;
        }

        default:{
            console.log("Veliya poda")
        }
    }
}

accessGranterVTwo("Paul")

function twentyFromReverse(){
    let num = 0;
    for(i=20; i>0; i--){
        console.log(i);
        num += i
    }

    console.log(num)
}

twentyFromReverse()

function tillSix(){
    
    do{
        console.log("Number is "+ i);
        i++;
    }
    while(i < 7)
}

tillSix()
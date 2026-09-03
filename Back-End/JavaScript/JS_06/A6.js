function discount(memeber,coupon,quantity,cap){

    let disc=0

    switch(memeber){
        case "gold":
            disc+=20;
            break;

        case "silver":
            disc+=10;
            break;

        default:
            break;

    }

    // if (memeber=="gold" || memeber=="GOLD" || memeber=="Gold"){
    //     disc+=20
    // }

    // else if (memeber=="Silver" || memeber=="silver" || memeber=="SILVER"){
    //     disc+=10
    // }

    // else {
    //     disc+=0
    // }

    if (coupon=="TRUE" || coupon=="True" || coupon=="true"){
        disc+=8
    }

    else {
        disc+=0
    }

    if (quantity>=10){
        disc+=5
    }

    else {
        disc+=0
    }

    if (disc>cap){
        disc=cap
    }

    console.log("Your discount is "+disc+"%")

}

discount("gold","true",20,40)
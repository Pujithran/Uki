main(7, 14, 4)

function main(r1, r2, s1){
    circle(r1)
    circle(r2)
    square(s1)
    }

function circle(rad){
    let radius = rad;
    const pi = 3.14
    let area=0, circ=0

    area = pi*radius*radius
    circ = 2*pi*radius
    console.log("If the rad is "+rad+" Circuferance is "+circ)
    console.log("If the rad is "+rad+" Area is "+area)
    }

function square(side){
    let area=0, circ=0

    area = side**2
    circ = 4*side
    console.log("If a side is "+side+" Area is "+area)
    console.log("If a side is "+side+" Circufarance is "+circ)
    }
        
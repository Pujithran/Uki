// Finding vowels and consonents

vowelsOrConsonents("g")

function vowelsOrConsonents(char){
    if(char=='A' || char=='E' || char=='I' || char=='O' || char=='U' || char=='a' || char=='e' || char=='i' || char=='o' || char=='u'){
        console.log(char+" is a vowel")
    }

    else{
        console.log(char+" is a consonent")
    }
}
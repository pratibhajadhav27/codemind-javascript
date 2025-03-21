function marriageEligibility(gender,age){
    if (gender=="male"&& age>=21) {
        console.log(`congrats boy. ${gender}...${age}`);
        
    }else if (gender=="female"&& age>=18) {
            console.log(`congrats girl. ${gender}...${age}`);
                    
    } else {
            console.log(`Nasib phuta...${gender}...${age}`);
        
    }
}
marriageEligibility("male", 27);

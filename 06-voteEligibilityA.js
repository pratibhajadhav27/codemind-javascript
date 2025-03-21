var voteEligibility= function(age){
    if (age==0||age<0||age>=130||age==null) {
        console.log(`Invalid data, Please enter the valid data ${age}`);
        
    } else {
    if (age>=18) {
        console.log(`Age ${age} You are Eligible for vote`);
        
    } else {
        console.log(`Age ${age}  Sorry, You are Not Eligible for vote`);
        
    }
}
}
voteEligibility(47);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);

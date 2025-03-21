var greterNumber= function(n1,n2){
    var result=n1>n2 ? n1:n2;
    console.log(`***************STEP 1*******************`);
    
    console.log(`Max Number is between ${n1} and ${n2} is :${result}`);
    
}
greterNumber(10, -10);
greterNumber(800, 899);

var isevenorodd =function(num){
    var result= (num%2==0) ? true : false;
    return result;
}
var returnValue=isevenorodd(29);
console.log(`****************STEP 2**********************`);

console.log(`true given number 29 is even or false given number is odd:${returnValue}`);

var returnValue=isevenorodd(44);
console.log(`true given number 44 is even or false given number is odd:${returnValue}`);

var returnValue=isevenorodd(0);
console.log(`true given number 0 is even or false given number is odd:${returnValue}`);

var returnValue=isevenorodd(101);
console.log(`true given number 101 is even or false given number is odd:${returnValue}`);


var wordLength= function(word){
    var result=(word.length%2==0)? "EVEN":"ODD";
    return result;
}
var returnValue= wordLength("java script");
console.log(`**********************STEP 3***********************`);

console.log(`The JavaScript is : :${returnValue}`);

var returnValue= wordLength("developer");
console.log(`The developer is : :${returnValue}`);

var returnValue= wordLength("Google");
console.log(`The Google is : :${returnValue}`);




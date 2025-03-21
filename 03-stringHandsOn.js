
function stringHandsOn(){
    var str ="  Hey you are doing good, keep it up  ";
    console.log(`Given string is: ${str}`);
    console.log(`The string length is: ${str.length}`);

    var result  = str.trim();
    console.log(`${result}`);
    console.log(`Remove space after lenght: ${result.length}`);

   // console.log(`${str.length} - ${result.length}`);
    var resulttrim =str.length - result.length ;
    console.log(`total space avaliable in string ${resulttrim}`);
    
    console.log(`The first letter ${result.charAt(0)}, Last letter ${result.charAt(result.length-1)}`);
    var words= result.split(" ");
    console.log(`Total number of words ${words.length}`);

    var ii=result.indexOf("good");
    console.log(`index of good :${ii}`);

    var subresult=result.substring(22);
    console.log(`substring from index 22: ${subresult}`);
    
    var endwords = result.endsWith("up");
    console.log(`string is ends with words "up": ${endwords }`);
    
    var stratwords =result.startsWith("Hey");
    console.log(`string is start with words "Hey": ${stratwords}`);
}
stringHandsOn();

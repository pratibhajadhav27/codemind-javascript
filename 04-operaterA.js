
 function squareOfWordLength(str){
    var strLength = str.length;
    var result = strLength * strLength;
    console.log(`**********************STEP 1*****************************`);
    
    console.log(`Given word JavaScript and its length is: ${strLength}`);
    console.log(`Given word JavaScript and its length square is: ${result}`);  

}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Web Developer Smart");



function wordLengthOpr(){
    var str ="i am UI Developer";
    var wordLength=str.length;
    var words= str.split(" ").length;
    var result = wordLength/words;
    console.log(`********************STEP 2*******************************`);
    console.log(`String length is ${wordLength}`);
    console.log(`total words in string ${words}`);
    console.log(`String length divided by total number of words available in string ${result}`);
    var result= wordLength * words;
    console.log(`String length multiplied by total number of words available in string ${result}`);
}
wordLengthOpr();
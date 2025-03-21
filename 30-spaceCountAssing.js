let str ="Revision is the mother of success";
let strr ="javaScript is the language of internet world"
function spaceCount(str){
    let lettercount = 0;
    
    for(var i=0; i<str.length; i++){
        if(str[i]==" "){
          
            lettercount++;

            }
        }
    return lettercount;
}
console.log("Revision is the mother of success---in this string total number of space is-");
console.log(spaceCount(str));
console.log("javaScript is the language of internet world---in this string total number of space is-");
console.log(spaceCount(strr));
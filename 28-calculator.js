const addition = document.querySelector("#addition");
addition.addEventListener('click', ()=>{
    const numOne = +document.querySelector("#inputFiledOne").value;
    const numTwo = +document.querySelector("#inputFiledTwo").value;
    alert(numOne+numTwo);
});

const sub =document.querySelector("#subtraction");
sub.addEventListener(`click`, ()=>{
    const numOne = +document.querySelector("#inputFiledOne").value;
    const numTwo = +document.querySelector("#inputFiledTwo").value;
    alert(numOne-numTwo);
});

const mult =document.querySelector("#multiplication");
mult.addEventListener(`click`, ()=>{
    const numOne = +document.querySelector("#inputFiledOne").value;
    const numTwo = +document.querySelector("#inputFiledTwo").value;
    alert(numOne*numTwo);
});

const divi =document.querySelector("#division");
divi.addEventListener(`click`, ()=>{
    const numOne = +document.querySelector("#inputFiledOne").value;
    const numTwo = +document.querySelector("#inputFiledTwo").value;
    alert(numOne/numTwo);
});


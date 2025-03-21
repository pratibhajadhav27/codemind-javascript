 const fruits_seasonal=["Banana","orange","Apple","Mango","WaterMelon"];
 console.log(fruits_seasonal);
 const firstelement =fruits_seasonal[0];
 console.log(`First element of the array -${firstelement}`);
 const lastelement =fruits_seasonal[fruits_seasonal.length-1];
 console.log(`Last element of the array -${lastelement}`);
 console.log(`***********insert papaya element in array first position**************`);
 
 fruits_seasonal.unshift("Papaya");
 console.log(fruits_seasonal);

 console.log(`*****************remove mango from the array**************`);
 const removeElement = fruits_seasonal.splice(4, 1);
 console.log(fruits_seasonal);
 

 console.log(`***************insert the Pineapple element in last position***********`);
 fruits_seasonal.push("Pineapple");
 console.log(fruits_seasonal);

 console.log(`***********insert the Dragon before Water Melon****************`);
 fruits_seasonal.splice(4,0,"Dragon");
 console.log(fruits_seasonal);

 console.log(`***********Replace Orange with Kiwi****************`);
 console.log(fruits_seasonal);
 fruits_seasonal.splice(2,1, "Kiwi");
 console.log(fruits_seasonal);

 console.log(`*****************log last elements starting from index 1 to 4******************`);
 const removefruits = fruits_seasonal.splice(1, 4);
 console.log(removefruits);

 console.log(`*****************only last three element from array*****************`);
 const fruits_seasonal_new =[`Papaya`,`Banana`,`kiwi`,`Apple`,`Dragon Fruit`,`Water Melon`,`Pineapple`];
 const newFruitsSelected = fruits_seasonal_new.slice(fruits_seasonal_new.length-3);
 console.log(newFruitsSelected);
 
 
 
 


 
 
 

 
 
 
 
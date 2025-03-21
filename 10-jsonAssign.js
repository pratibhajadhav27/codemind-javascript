const employeeAleix =`{
"name": "Aleix Melon",
"id": "E00245",
"role":["Dev","DBA"],
"age":23,
"doj": "11-12-2019",
"married": false,
"address": {
    "street": "32,laham St.",
    "city": "Innsbruck",
    "country": "Austria"
    },
    "referred-by": "E0012"
}`

const employeeAleixObj = JSON.parse(employeeAleix);
console.log(employeeAleixObj);
console.log("**************convert object**************");
const rolePos = employeeAleixObj.role;
console.log(rolePos);
console.log("***************first name in role*********************");
console.log(`${rolePos[0]}`);
console.log("**************last name*****************");
const lastName = employeeAleixObj.name;
console.log(lastName.substr(6,5));
console.log("*************year of emp**************");
const joinObj = employeeAleixObj.doj;
console.log(joinObj.substr(6, 5));








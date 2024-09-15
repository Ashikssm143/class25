//Topic 01 [Variable var]
var name = "I eat rice"
console.log(name);

//Topic 02
var multiple = "Bangladesh 2.o"
console.log(multiple);
console.log(multiple);
console.log(multiple);
console.log(multiple);

//Topic 03
var x = "Jaman 2.o"
var x = "Jaman 3.o"
console.log(x);
//Sesher take print kore dibe

//Topic 0
var y = "Rahman 2.o"
console.log(y);

// [Variable let] 

//Topic 05 [problem]
// let same  = "Ashik 2.o"
// let same  = "Ashik 3.o"
// console.log(same);
// Ai syntax ta evabe use korle error asbe 

// Topic 05 [solution]
let same  = "Ashik 2.o"
 same  = "Ashik 3.o"
console.log(same);



// Topic 06 [Variable const]
// [Const er value always fixxed thake etake ditio bar use kora jai na] 
const litre  = 34.1416
console.log(litre);


// Topic 07
// [Variable scop] 
//Always second braccet diye start korte hoy
{
    var scop = 109
    console.log(scop);
}

// Topic 08
{
    var scop2 = 108 
}
console.log(scop2);
// var second braccet er vitore ebong bahire print kore

// Topic 09
{
    let scop = 309
    console.log(scop);
}
// let shudhu braccet er moddhe kaj kore thake nahole error marbe

// Topic 10
// Variable er name dekhar jonno console er moddhe typeof likhte hoy
var rice = "I eat rice"
console.log(typeof name);

// Topic 11
var one = 11111
console.log(typeof one);


// Topic 12
// true/false hosce boolean value. ai jonno eder double/single string use korte hoy na
var honesty = true
console.log(typeof honesty);



// Topic 13 [If/Else]
let age = 25
if (age > 21) {
    console.log("Apni biye koren");
    
}
else {
    console.log("Apni Sishu");
    
}


// Topic 14 [If/Else]
let age2 = 15
if (age2 > 21) {
    console.log("Apni biye koren");
    
}
else {
    console.log("Apni Sishu");
    
}


// Topic 15 [If/Else & Else/If]
let marks = 89

if (marks >= 33 && marks <40) {
    console.log("You Got D"); 
}
else if (marks >= 0 && marks <33) {
    console.log("You are fail"); 
}
else if (marks >= 40 && marks <50) {
    console.log("You Got C"); 
}
else if (marks >= 50 && marks <60) {
    console.log("You Got B"); 
}
else if (marks >= 60 && marks <70) {
    console.log("You Got A-"); 
}
else if (marks >= 70 && marks <80) {
    console.log("You Got A"); 
}
else if (marks >= 80 && marks <100) {
    console.log("You Got A+"); 
}
else if (marks > 100 ) {
    console.log("Try next time"); 
}

else {
    console.log("You are fail");
    
}


 
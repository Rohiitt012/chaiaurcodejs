// console.log("hello rohit");
// let name="rohit";

// let age = "24";

// console.log(`hello my name ${name} and my age is ${age}`);
// const gameName = String("rohit chauhan");
// console.log(gameName);
// // console.log(typeof gameName);
// const gameName2 = new String("diksha chauhan");
// console.log(gameName2[5]); // ye hai key value access
// console.log(gameName2[6]);
// console.log(gameName2.toUpperCase());
// console.log(gameName2.charAt(4));
// console.log(gameName2.substring(0 ,4));
// const newgameName = new String("     rohit  h   ");
// console.log(newgameName.trimEnd().trimStart());
// console.log(newgameName);

// const url = "google.com";
// // url.replace("go","to");
// console.log(url.replace('go','to'));
// const firstName = new String("rohit chauhan");
// console.log(firstName.includes("roi"));
// console.log(firstName.split(" "));


// let name = "rohit";
// let lastName = "chauhan";
// console.log(`my name is ${name} ${lastName}`);

// // let score = new Number(400);
// // console.log(score);
// // console.log(typeof score);
// // const newBalance = new Number(445);
// // console.log(newBalance.valueof(555));
// const min = 50;
// const max = 100;
// // console.log(Math.round());
// // console.log(Math.random()*10 + max-min);
// console.log(Math.floor(Math.random()*10 + max-min));
// let dateNow = new Date();
// // console.log(dateNow.toDateString());
// // console.log(dateNow.toISOString());
// // console.log(dateNow.toJSON());
// // console.log(dateNow.toLocaleString());
// let myArray1 = [0,1,25,3,4454,5];
// let myArray = new Array(45,12,0,12,45,56);
// // console.log(myArray);
// // console.log(myArray1);
// // myArray1.unshift(100);
// // myArray1.pop();
// // myArray1.shift();
// // myArray1.push(1212);
// // console.log(myArray);
// // console.log(myArray1);
// console.log(myArray1[2]);

// let myArray = new Array(0,1,2,3,4);
// console.log("A", myArray);
// console.log("B",myArray.slice(0,3));
// console.log("A", myArray);
// console.log("c", myArray.splice(0,3));
// console.log("A", myArray);


// function userOne(a,b){ // a and b is parameter
//     return a+b;   // jab function return kr de value uske bad kuch vi print ni hota function me
//     console.log("rohit chauhan");

// }
// console.log(userOne(3,5));  // 3 and 5 is argument 
// function userTwo(anyArray){
// console.log("this is array");
// }
// userTwo([10,20,30]);


// function loginUser(userName){if(userName===undefined){
// console.log("please entr the code")
// }
//     return `${userName} just loggin`
// };
// console.log(loginUser());


// function calculateCartPrice(...numbers){ // rest...and sprits operator 
//     return numbers;
// };
// console.log(calculateCartPrice(12,14,16,18));  
// // out in form of array [12,14,16,18]
// function calculateCartPrice1(val1, val2, ...numbers){
//     return numbers;
// };
// console.log(calculateCartPrice1(12,14,16,18));
// // output is 16 and 18 

// const user1={
//     name: "Rohit chauhan",
//     age: 29
// };

// const user2={
//     name: "Rahul cahuhan",
//     age: 32
// };

// function handleObject(user){     // ye hai function defination
//     return user;
// }
// console.log(handleObject(user1));  // ye hai function calling
// console.log(handleObject(user2));  // ye hai function calling
// console.log(handleObject({
//     username:"rohan",
//     age:44     // direct object vi pass kr skte hai function me
// }));  // ye hai function calling
// console.log(handleObject([]));  // ye hai function calling
// output in form of object{name:"Rohit chauhan", age:29}  
// types check krna pdta hai 


const myArray=[200,400,600,800];
function secondValue (anyArray){
    return anyArray[2];
};
console.log(secondValue([200,55,44])); //direct array 

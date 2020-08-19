// CHALLENGE 1
// Who's name is longer?
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
 */
/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/
/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/

//Bronze Name Length


let myName = "Jordana";
let friendsName = "Peyton";

console.log(friendsName.length);
console.log(myName.length);

//Silver Whose is longer

if(myName.length > friendsName.length){
    console.log("My name has " + (myName.length-friendsName.length) + " more characters than my friends.");
} else if (myName.length < friendsName.length){
    console.log("My friends name has" + (myName.length-friendsName.length) + "more characters than mine");
} else {
    console.log("Your names are equal.");
}


//Gold letter difference in names
 console.log(myName.length-friendsName.length);

 //CLASS VERSION
 let myName = "Jordan";
 let friendsName = "Peyton";

 if (myName.length > friendsName.length) {
     console.log(`${myName}'s name is greater than ${friendsName}'s name.`)
 } else if (myName.length < friendsName.length) {
    console.log(`${myName}'s name is shorter than ${friendsName}'s name.`)
} else {'Our names are the same length.'}

let myName = "Jordan";
let friendName = "Wes";

if (myName.length > friendName.length){
    let letters = 'letters'; //locally scoped variable
}

console.log(letters); //won't pull bc 'letters' only lives up above


let myName = "Jordan";
let friendName = "Wes";
if (myName.length > friendName.length){
    let letters = myName.length - friendName.length; //locally scoped variable
    console.log(`${friendName}'s name is shorter than mine by ${letters}`)
} else if (myName.length < friendName.length) {
    let letters = friendName.length - myName.length
    console.log(`${friendName}'s name is longer than mine by ${letters}`)
} else {
    console.log('Our names are the same length')
}

// CHALLENGE 2
// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 */
/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/



let pants = {
    pantsColor: 'purple',
    pantsLength: 'capris',
    isRipped: true,
}

let hulk = {
    color: 'green',
    age: 42,
    isStrong: true,
}


if (hulk.color != String) {
    console.log('What are you!')
}
console.log(typeof hulk)

//  CLASS NOTES

let object = {
    michael: 'string',
    dwight: 4,
    pam: true,
    ryan: {
        key: 'valuepairs'
    },
    creed: undefined
}

console.log(typeof object.michael);
console.log(typeof object.ryan.key);
console.log(typeof object.ryan);
console.log(typeof object.ryan.key);

let value = object.ryan.key;

if (typeof value === 'string'){
    console.log('This value is a string');
} else if (typeof value === 'number') {
    console.log('This nvalue is a number');
} else if (typeof value === 'boolean') {
    console.log('This value is a boolean.');
} else if (typeof value === 'object') {
    console.log('This value is an object.');
} else {
    console.log('What are you?!')
}
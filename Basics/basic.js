// print statement
console.log('Hi, I\'m Harpeet singh')

// Automatic Semi-colon Insertion(ASI)
/* multi-line comment */

console.log("%cHello, World", "color: blue; font-size: 40px")

// Declaring Variables --------------------------------

var person;

person = "John"
console.log(person)
person = "harpreet"
console.log(person)

console.log("Hello", person)

var petDog = "Rex"
var petCat = "Pepper"
console.log(petDog)
console.log(petCat)
console.log("My pet dog's name is: ", petDog)
console.log("My pet cat's name is: ", petCat)

var catSound = "purr"
var dogSound = "woof"
console.log(petDog, "says", dogSound)
console.log(petCat, "says", catSound)
catSound = "meow"
console.log(petCat, "now says", catSound)


// Data Types :

/**
 * Primitive  data types: 
 * 
 * - there are 7 primitive datatypes in Js.
 * - 1. String
 * - 2. Number - Integers and decimal points
 * - 3. Boolean
 * - 4. Null - The absence of Value
 * - 5. Undefined - A variable not yet assigned a value
 * - 6. BigInt
 * - 7. Symbol
 */



// Important about Operators :

/*The equality operator, ==

-> The equality operator compares only the values, but not the types.
 eg.  true: 5 == 5
      true: 5 == '5' 
*/

/*The strict equality operator, ===
-> The strict equality operator compares both the values and the types.
eg.  true: 5 === 5
     false: 5 === '5'
*/

// The inequality operator, !=
/*
-> The inequality operator checks if two values are not the same, but it does not check against the difference in types.
eg: , 5 != "5" returns false, because it's false to claim that the number 5 is not equal to number 5, even though this other number is of the string data type.

*/

// The strict inequality operator, !==
/*

For the strict inequality operator to return false, the compared values have to have the same value and the same data type. 

For example,  5 !== 5 returns false because it is false to say that the number 5 is not of the same value and data type and another number 5.

However, comparing the number 5 and the string 5, using the strict inequality operator, returns true.

 */


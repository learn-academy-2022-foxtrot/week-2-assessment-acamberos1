// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
// read the problem, read the arrays and expected outputs 
// make a function/object to read the  arrays and produce another array with all the values times 3
// start off with describe and the function name and the function symbols then state the purpose of the function
// encase the const within the function
// use expect to chain the function, the arrays and the array values to equal the desired outcome


describe ("multiplyByThree", () => {
    it(" it will read the arrays and output one with all the numbers times 3", () => {

        const numbersArray1 = [6, 7, 8, 9, 10]
        // Expected output: [18, 21, 24, 27, 30]
        const numbersArray2 = [24, 27, 30, 33, 36]
        // Expected output: [72, 81, 90, 99, 108]

        expect(multiplyByThree(numbersArray1)).toEqual[18, 21, 24, 27, 30]
        expect(multiplyByThree(numbersArray2)).toEqual[72, 81, 90, 99, 108]
        return multiplyByThree(array)
    })
})

// notes say a cause of undefined function can be from a missing return or expect statement so i tried each with the arrrays seperate but no change

// b) Create the function that makes the test pass.

 // error came out saying multiplyby three not defines so i make a new function for it 
    // make function collect incoming arrays, that map it
    // as the map function is working it will return output the values multiplied by 3
    // expect statements dont help so i remove them but describe still isnt defined so i try to add expect statements to help but undefined keeps replaying

    const multiplyByThree=(array).map((value) => value * 3)
    console.log(describe(multiplyByThree(array))
        
 // have another function map and alter the arrays
 // yarn jest no longer tells error for this function but still fails
 // 
 //SyntaxError: /Users/learnacademy/Desktop/week-1-assessment-acamberos1/week-2-assessment-acamberos1/code-challenges.test.js: Unexpected token, expected "," (116:0)


   

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// see prompt and make function holding the objects 
// label the function and it the goal of the function
// make if statement to return its divisble if its divisble by 3
//  ReferenceError: number is not defined
// define or change the number to object so it will read the value in each object
// object not defined
// i attempted to make another function to tell if divisble by 3 but received " Missing second argument. It must be a callback function"
// describe ("divByThree", () => {
//     it(" it will read the object and see if it is divisible by three", () => {
            

// const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// expect(divByThree())


//     })
// })
//  let divByThree =(object) => {
// if(object % 3 === 0) {
//     return "divisible by 3"
// } else if  ( object % 3 !== 0) {
//     return " not divible by 3"
// }
//  }
// console.log(divByThree())
// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
// look at prompt
// check google and notes for any similar functions
// compare class
//wont say new error message besides , expected but it points at first const in squigly
// error doesnt leave when i use  command z and delete edited code
//split?
// no change in error message
//try expected with the capitlized words
// no change noted, tried return with split again


// const letterArray =() => {
// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
 
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]

// return randomNouns1.split("")
//     expect ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.
// read the prompt, make a function to surround the arrays.
// look through syllabus for the proper technique
// try describe , describe makes more erros

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
// read prompt 
//make describe function
//errors show for both describe and function name
// now after changing title of function it only shows one error on describe
// , expected error but after fixing it from changing = to , error still shows for describe
// notice output statements show number for watned out comes
// recheck notes for any similar example
// notice a plausible way on google
// make a seperate function to read the strings and log the vowels

describe("vowelFunction" , () => {


 const vowelTester1 = "learn"
// // Expected output: 1
const vowelTester2 = "academy"
// // Expected output: 0
const vowelTester3 = "challenges"
// // Expected output: 2
}
// b) Create the function that makes the test pass 
const vowelCheck = () => {
    {
        let vowel_letters = 'aeiouAEIOU';
        let vcount = 0;
        
        for(const x = 0; x < str1.length ; x++)
        {
          if (vowelCheck.indexOf(str1[x]) !== -1)
          {
            vcount += 1;
          }
        
        }
        return vcount;
}
// unexpected token error,


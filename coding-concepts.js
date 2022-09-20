// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Foxtrot 2022"
//  console.log(cohort.split(""))

// a) Your answer: I predict it will give an error or succesfully split foxtrot into single letters
// b) Verify and explain: after testing the code it split the string into individual letters, The "" marks contains the whole string so split worked on everything between them

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: I think it will print out hello learn student, hello is inputted from string interpolation and name would be replaced with learn student in console.log
// b) Verify and explain: it gave an undefined message, name wasnt given a declaration  only a parameter

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
//console.log(multipliedByTwo)

// a) Your answer: i think it will dispalay the numbers multiplied by two.
// b) Verify and explain:after verifying it seems i was correct since the map function takes the array and makes a new one with the numbers changed 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
 //console.log(onlyOdds)

// a) Your answer: will only show 11 , 13, 15
// b) Verify and explain: i was correct, i cant remember the exact source but i remember seeing working filter functions that looked similar to this so i predicted it would work

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: i think it will either show javascript since it is 0 in the array index or be shown an error
// b) Verify and explain:it showed javascript

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer:
// b) Verify and explain:

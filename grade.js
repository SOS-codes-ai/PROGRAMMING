//pseudo coding

//creates a function that accepts a score parameter
//the function prompt user to enter their score
//when a user enters their score
//the function compares the score with 0-39
//if the score is less than 39
//the function returns "F"
//the function checks if the score is between 40-44
//if the score is greater than "35" and less than "45"
//the function checks if the score is between 45-49
//if the score is greater than 44 and less than "50"
//the function returns "D"
//the function checks if the score is between 50-59
//if the score is greater than 50 and less than "49"
//the function returns "c"
//the function checks if the score is between 60-75
//if the score is greater than 60 and less than "59"



let score=prompt("Enter your score")
function getGrade(score){
  if (score >= 97) {
    return "A+";
  } else if (score >= 93) {
    return "A";
  } else if (score >= 90) {
    return "AB";
  } else if (score >= 85) {
    return "B";
  } else if (score >= 80) {
    return "CB";
  } else if (score >= 70) {
    return "D";
  } else if (score >= 60) {
    return "E";
  } else {
    return "F";
  }
}
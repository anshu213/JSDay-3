//Decision Making..................................//............................
//if-else statement...............................

let x = 5;
if (x > 10){
    console.log('x is greater than 10');
}
else {
    console.log('x is less than or equal 10');
}


//Q: if remainder is 0 , print the statement true...
// num = 13
let y = 13;
if (y % 2 === 0){
    console.log('true');
    
}else{
    console.log('false');
    
}


//Switch Statement...............................................................

// Q: A school has following grading rule:
// 1: 0-10(E)
// 2: 11-20(D)
// 3: 21-30(C)
// 4: 31-40(B)
// 5: 41-50(A)
//ask user to enter marks out of 50 and print the grades using switch statement.

let marks = 50;
    let grade;

    switch (true) {
        case (marks >= 0 && marks <= 10):
            grade = "E";
            break;
        case (marks >= 11 && marks <= 20):
            grade = "D";
            break;
        case (marks >= 21 && marks <= 30):
            grade = "C";
            break;
        case (marks >= 31 && marks <= 40):
            grade = "B";
            break;
        case (marks >= 41 && marks <= 50):
            grade = "A";
            break;
        default:
            grade = "Invalid marks! Please enter a number between 0 and 50.";
    }
console.log("Your Grade is:", grade);


//Print the Days of the week using switch statement...................................

let weekday = parseInt(prompt("Enter your number"));
let day;
      switch (weekday) {
            case 1:
            day = "sunday";
            break;
            case 2:
            day = "monday";
            break;
            case 3:
            day = "Tuesday";
            break;
            case 4:
            day = "Wednesday";
            break;
            case 5:
            day = "Thursday";
            break;
            case 6:
            day = "Friday";
            break;
            case 7:
            day = "Saturday";
            break;
      
        default:
            day = "Invalid input";
            break;
      }
      console.log("The day is:",day);
      




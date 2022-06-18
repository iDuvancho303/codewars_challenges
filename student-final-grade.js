/* instructions Output

Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

    100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
    90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
    75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
    0, in other cases

Examples(Inputs-->Output):

100, 12 --> 100

99, 0 --> 100

10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0

20, 2 --> 0

*Use Comparison and Logical Operators.

*/

// My Solution

// create a function 'FinalGrade'
// must have two parameters. one for grade of the exam and one for the number of projects

function finalGrade(g, p) {
    if(g > 100 || p > 10) {
        console.log('your grade is 100%');
    } else(g > 75 && p >= 5) {
        console.log('Your grade is 90%');
    } else(g > 50 && p >= 2) {
        console.log('Your grade is 75%')
    } else
}

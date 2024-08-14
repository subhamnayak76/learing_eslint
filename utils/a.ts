// // const Bmi = (weight : number ,height : number ) : string =>{
// //   const bmi = weight / (height * height);
// //   if(bmi < 18.5){
// //     return "Underweight";
// //   }
// //   else if(bmi >= 18.5 && bmi <= 24.9){
// //     return "Normal weight";
// //   }
// //   else if(bmi >= 25 && bmi <= 29.9){
// //     return "Overweight";
// //   }
// //   else{
// //     return "Obesity";
// //   }
// // }
// // console.log(Bmi(70,1.75)); 
// import { parseArguments } from './ut';
// interface ExerciseResult {
//   periodLength : number,
//   trainingDays : number,
//   success : boolean,
//   rating : number,
//   ratingDescription : string,
//   target : number,
//   average : number
// }

// const exercise = (target:number,days : number[]) : ExerciseResult => {
//   const periodLength = days.length;
//   const trainingDays = days.filter(day => day > 0).length;
//   const average = days.reduce((acc,cur) => acc + cur,0) / periodLength;
//   const success = average >= target;
//   let rating = 0;
//   let ratingDescription = '';
//   if(average < target){
//     rating = 1;
//     ratingDescription = 'bad';
//   }
//   else if(average === target){
//     rating = 2;
//     ratingDescription = 'good';
//   }
//   else{
//     rating = 3;
//     ratingDescription = 'excellent';
//   }
//   return {
//     periodLength,
//     trainingDays,
//     success,
//     rating,
//     ratingDescription,
//     target,
//     average
//   }
// }
// try {
//   const { target, dailyExercises } = parseArguments(process.argv);
//   console.log(exercise(target, dailyExercises));
// } catch (error: unknown) {
//   let errorMessage = 'Something bad happened.';
//   if (error instanceof Error) {
//     errorMessage += ' Error: ' + error.message;
//   }
//   console.log(errorMessage);
// }

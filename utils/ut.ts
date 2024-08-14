// utils.ts

export interface ExerciseValues {
    target: number;
    dailyExercises: number[];
  }
  
  export const parseArguments = (tar: number,dailyexe:number[]): ExerciseValues => {
  ;
  
  
    const target = Number(tar);
    const dailyExercises = dailyexe.map(Number);
  
    if (isNaN(target) || dailyExercises.some(isNaN)) {
      throw new Error('Provided values were not numbers!');
    }
  
    return {
      target,
      dailyExercises
    };
  };
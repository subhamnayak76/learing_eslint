import express from 'express';
import { parseArguments } from './utils/ut';

const app = express();

app.use(express.json());

interface ExerciseResult {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

app.post('/exercise/', (req, res) => {
    try {
        const { target, dailyexe } = req.body;
        
        if (!target || !dailyexe || !Array.isArray(dailyexe)) {
            return res.status(400).json({ error: 'Invalid input: target and dailyexe (array) are required' });
        }

        const parsedInput = parseArguments(target, dailyexe);
        
        const exercise = (target: number, days: number[]): ExerciseResult => {
            const periodLength = days.length;
            const trainingDays = days.filter(day => day > 0).length;
            const average = days.reduce((acc, cur) => acc + cur, 0) / periodLength;
            const success = average >= target;
            let rating: number;
            let ratingDescription: string;

            if (average < target) {
                rating = 1;
                ratingDescription = 'bad';
            } else if (average === target) {
                rating = 2;
                ratingDescription = 'good';
            } else {
                rating = 3;
                ratingDescription = 'excellent';
            }

            return {
                periodLength,
                trainingDays,
                success,
                rating,
                ratingDescription,
                target,
                average
            };
        };

        const result = exercise(parsedInput.target, parsedInput.dailyExercises);
        res.json(result);
    } catch (error: unknown) {
        let errorMessage = 'Something bad happened.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        console.log(errorMessage);
        res.status(500).json({ error: errorMessage });
    }
});

app.listen(3003, () => {   
    console.log('Server running on port 3003');
});
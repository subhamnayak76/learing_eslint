import express from 'express';
const app = express();
import {calculator ,Operation} from './calculator';
app.use(express.json());
app.post('/cal', (req, res) => {
    const {value1, value2, op} = req.body;
    
    const operation = op as Operation;
    const result = calculator(Number(value1), Number(value2), operation);
    res.send({result});
});

app.listen(3003, () => {
    console.log('Server running on port 3003');
})
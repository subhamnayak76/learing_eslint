import express from 'express';
const app = express();

app.post('/bmi/', (req, res) => {
  const { weight, height } = req.body;
  if (isNaN(weight) || isNaN(height)) {
    return res.send({ error: "malformatted parameters" });
  }
  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    res.send({ weight, height, bmi, message: "Underweight" });
  }
  else if (bmi >= 18.5 && bmi <= 24.9) {
    res.send({ weight, height, bmi, message: "Normal weight" });
  }
  else if (bmi >= 25 && bmi <= 29.9) {
    res.send({ weight, height, bmi, message: "Overweight" });
  }
  else {
    res.send({ weight, height, bmi, message: "Obesity" });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
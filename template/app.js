import express from "express"
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
// app.use('/api', require('./routes'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
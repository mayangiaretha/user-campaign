import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.routes.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Home page.'));

app.listen(PORT, () =>
    console.log(`server running on port: http://localhost:${PORT}`)
);

export default app;

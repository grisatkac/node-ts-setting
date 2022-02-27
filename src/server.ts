import express, {Application, Request, Response } from 'express';

const app:Application = express();
const PORT = 3000;
app.get('/', (req: Request, res: Response) => {
    res.send('Hello world');
});

app.listen(PORT, () => console.log('Server TS has been started'));

import express, { Application, Request, Response } from 'express'
const app : Application = express();
import cors from 'cors';
import { UserRouter } from './modules/user/user.routes';

const port = 3000

app.use(express.json());
app.use(cors());
app.use('/api', UserRouter)

app.get('/', (req : Request, res : Response) => {
  res.send('Hello World!')
})
export default app;
import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { corsConfig } from '../config';
import helmet from 'helmet';
import CPUStats from './routes/aws.route';

const app: Express = express();

app.use(cors(corsConfig));
app.use(helmet());
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  if (err) return res.status(err.status).send(err)

  return next(req); 
});

app.use('/api/aws', CPUStats);

app.use(((req: Request, res: Response, next: any) => {
  res.status(404).send('Error 404: Page Not Found');
})); 

export { app };

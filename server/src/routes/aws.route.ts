import { Router, Request, Response } from 'express'
import { getCPUStats } from '../controllers/aws.controller';

const router = Router();

router.get('/healthcheck', (req: Request, res: Response): void => {
  res.sendStatus(200);
});

router.post('/', getCPUStats);

export default router;

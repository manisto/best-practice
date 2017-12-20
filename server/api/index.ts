import * as express from 'express';
import { authorRouter } from './authors';

export let apiRouter: express.Router = express.Router();
apiRouter.use('/authors', authorRouter);
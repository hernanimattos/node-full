import express from 'express';
import home from '../controllers';

const mainRouter = express.Router();

mainRouter.get('/', home);
export default mainRouter;

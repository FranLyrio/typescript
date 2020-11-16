import { Router } from 'express';
import ideaRouter from './idea.routes';

const routes = Router();

routes.use('/idea', ideaRouter);

export default routes;

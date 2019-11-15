import {Router} from 'express';
import * as Driblo from './app/services/driblo'

const routes = new Router();

routes.get('/api/pelada/:peladaId', Driblo.getPelada);
export default routes;
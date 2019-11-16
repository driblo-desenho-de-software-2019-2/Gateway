import {Router} from 'express';
import * as Driblo from './app/services/driblo'

const routes = new Router();

routes.post('/api/pelada', Driblo.createPelada);
routes.get('/api/pelada/:peladaId', Driblo.getPelada);
routes.put('/api/pelada/:peladaId', Driblo.updatePelada);
routes.delete('/api/pelada/:peladaId', Driblo.deletePelada);

export default routes;
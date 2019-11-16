import {Router} from 'express';
import * as Driblo from './app/services/driblo'

const routes = new Router();

// Pelada
routes.post('/api/pelada', Driblo.createPelada);
routes.get('/api/pelada/:peladaId', Driblo.getPelada);
routes.put('/api/pelada/:peladaId', Driblo.updatePelada);
routes.delete('/api/pelada/:peladaId', Driblo.deletePelada);

// User
routes.post('/api/user', Driblo.createUser);
routes.get('/api/user/:userId', Driblo.getUser);

export default routes;
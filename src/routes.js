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
routes.put('/api/user/:userId', Driblo.updateUser);
routes.delete('/api/user/:userId', Driblo.deleteUser);

// Rule
routes.post('/api/rule', Driblo.createRule);
routes.get('/api/rule/:ruleId', Driblo.getRule);
routes.put('/api/rule/:ruleId', Driblo.updateRule);
routes.delete('/api/rule/:ruleId', Driblo.deleteRule);

// Goal
routes.post('/api/goal', Driblo.createGoal);

// UserTeam
routes.post('/api/userteam', Driblo.createUserTeam);
routes.delete('/api/userteam/:userteamId', Driblo.deleteUserTeam);

// Team
routes.post('/api/team', Driblo.createTeam);

// PeladaUser
routes.post('/api/peladauser', Driblo.createPeladaUser);
routes.delete('/api/peladauser/:peladauserId', Driblo.deletePeladaUser);

export default routes;
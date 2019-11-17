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
routes.get('/api/pelada/:peladaId/rules', Driblo.getRule);
routes.put('/api/rule/:ruleId', Driblo.updateRule);
routes.delete('/api/rule/:ruleId', Driblo.deleteRule);

// Goal
routes.post('/api/goal', Driblo.createGoal);

// UserTeam
routes.post('/api/userteam', Driblo.addUserTeam);
routes.delete('/api/users/:userId/team/:teamId', Driblo.removeUserTeam);

// Team
routes.post('/api/team', Driblo.createTeam);

// PeladaUser
routes.post('/api/peladauser', Driblo.addUserPelada);
routes.get('/api/pelada/:id/users-presents', Driblo.listPlayersPresent);
routes.get('/api/pelada/:id/highlights-of-game', Driblo.highlightsOfGame);
routes.put('/api/users/:userId/pelada/:peladaId', Driblo.togglePresence);
routes.delete('/api/peladauser/:peladauserId', Driblo.removeUserPelada);
routes.delete('/api/users/:userId/pelada/:peladaId', Driblo.removeUserPelada);

// Photo pelada
routes.post('/files', Driblo.insertPhotoPelada);

export default routes;
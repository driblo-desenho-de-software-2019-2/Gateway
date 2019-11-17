import axios from 'axios';

// Pelada
export async function createPelada(req, res) {
    try{
        const response = await axios.post(`http://driblo:8001/pelada`, req.body);
    }catch(error){
        return res.status(400).json({message:error.message});
    }

    return res.json(response.data);
}

export async function getPelada(req, res) {
    const { peladaId } = req.params;
    try{
        const response = await axios.get(`http://driblo:8001/pelada/${peladaId}`);
    }catch(error){
        return res.status(400).json({message:error.message});
    }
    return res.json(response.data);
}

export async function updatePelada(req, res) {
    const { peladaId } = req.params;
    try{
        const response = await axios.put(`http://driblo:8001/pelada/${peladaId}`, req.body);
    }catch(error){
        return res.status(400).json({message:error.message});
    }
    return res.json(response.data);
}

export async function deletePelada(req, res) {
    const { peladaId } = req.params;
    try{
        const response = await axios.delete(`http://driblo:8001/pelada/${peladaId}`);        
    }catch(error){
        return res.status(400).json({message:error.message});
    }

    return res.json(response.data);    
}

// User
export async function createUser(req, res) {
    try{
        const response = await axios.post(`http://driblo:8001/user`, req.body);
    }catch(error){
        return res.status(400).json({message:error.message});
    }
    
    return res.json(response.data);
}

export async function getUser(req, res) {
    const { userId } = req.params;
    try{
        const response = await axios.get(`http://driblo:8001/user/${userId}`);        
    }catch(error){
        return res.status(400).json({message:error.message});
    }

    return res.json(response.data);
}

export async function updateUser(req, res) {
    const { userId } = req.params;
    const response = await axios.put(`http://driblo:8001/user/${userId}`, req.body);
    return res.json(response.data);
}

export async function deleteUser(req, res) {
    const { userId } = req.params;0
    const response = await axios.delete(`http://driblo:8001/user/${userId}`);
    return res.json(response.data);    
    
}

// Rule
export async function createRule(req, res) {
    const response = await axios.post(`http://driblo:8001/rule`, req.body);
    return res.json(response.data);
}

export async function getRule(req, res) {
    const { ruleId } = req.params;
    const response = await axios.get(`http://driblo:8001/rule/${ruleId}`);
    return res.json(response.data);
}

export async function updateRule(req, res) {
    const { ruleId } = req.params;
    const response = await axios.put(`http://driblo:8001/rule/${ruleId}`, req.body);
    return res.json(response.data);
}

export async function deleteRule(req, res) {
    const { ruleId } = req.params;
    const response = await axios.delete(`http://driblo:8001/rule/${ruleId}`);
    return res.json(response.data);    
    
}

// Goal
export async function createGoal(req, res) {
    const response = await axios.post(`http://driblo:8001/goals`, req.body);
    return res.json(response.data);
}

// UserTeam
export async function addUserTeam(req, res) {
    const response = await axios.post(`http://driblo:8001/userteam`, req.body);
    return res.json(response.data);
}

export async function removeUserTeam(req, res) {
    const { userId, teamId } = req.params;
    const response = await axios.delete(`http://driblo:8001/users/${userId}/team/${teamId}`);
    return res.json(response.data);
}

// Team
export async function createTeam(req, res) {
    const response = await axios.post(`http://driblo:8001/team`, req.body);
    return res.json(response.data);
}

// UserPelada
export async function addUserPelada(req, res) {
    const response = await axios.post(`http://driblo:8001/peladaUser`, req.body);
    return res.json(response.data);
}

export async function removeUserPelada(req, res) {
    const { userId, peladaId } = req.params;
    const response = await axios.delete(`http://driblo:8001/users/${userId}/pelada/${peladaId}`);
    return res.json(response.data);
}

export async function togglePresence(req, res) {
    const { userId, peladaId } = req.params;
    const response = await axios.put(`http://driblo:8001/users/${userId}/pelada/${peladaId}`, req.body);
    return res.json(response.data);
}

export async function listPlayersPresent(req, res) {
    const { peladaId } = req.params;
    const response = await axios.get(`http://driblo:8001/pelada/${peladaId}/users-presents`);
    return res.json(response.data);
}

export async function highlightsOfGame(req, res) {
    const { peladaId } = req.params;
    const response = await axios.get(`http://driblo:8001/pelada/${peladaId}/highlights-of-game`);
    return res.json(response.data);
}

export async function insertPhotoPelada(req, res) {
    const response = await axios.get(`http://driblo:8001/files`, req.body);
    return res.json(response.data);
}
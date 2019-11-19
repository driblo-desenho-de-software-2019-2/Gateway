import axios from 'axios';

// Pelada

const url = "http://driblo:8001";

export async function createPelada(req, res) {
    const response = await axios.post(`${url}/pelada`, req.body).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

export async function getPelada(req, res) {
    const { peladaId } = req.params;
    const response = await axios.get(`${url}/pelada/${peladaId}`).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

export async function updatePelada(req, res) {
    const { peladaId } = req.params;
    const response = await axios.put(`${url}/pelada/${peladaId}`, req.body).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

export async function deletePelada(req, res) {
    const { peladaId } = req.params;
    const response = await axios.delete(`${url}/pelada/${peladaId}`).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);    
}

// User
export async function createUser(req, res) {
    const response = await axios.post(`${url}/users`, req.body).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

export async function getUser(req, res) {
    const { userId } = req.params;
    const response = await axios.get(`${url}/users/${userId}`).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

export async function updateUser(req, res) {
    const { userId } = req.params;
    const response = await axios.put(`${url}/users/${userId}`, req.body).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

export async function deleteUser(req, res) {
    const { userId } = req.params;0
    const response = await axios.delete(`${url}/users/${userId}`).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);    
    
}

// Rule
export async function createRule(req, res) {
    const response = await axios.post(`${url}/rules`, req.body).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

export async function getRule(req, res) {
    const { ruleId } = req.params;
    const response = await axios.get(`${url}/rules/${ruleId}`).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

export async function updateRule(req, res) {
    const { ruleId } = req.params;
    const response = await axios.put(`${url}/rules/${ruleId}`, req.body).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

export async function deleteRule(req, res) {
    const { ruleId } = req.params;
    const response = await axios.delete(`${url}/rules/${ruleId}`).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);    
    
}

// Goal
export async function createGoal(req, res) {
    const response = await axios.post(`${url}/goals`, req.body).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

// UserTeam
export async function addUserTeam(req, res) {
    const response = await axios.post(`${url}/userteam`, req.body).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

export async function removeUserTeam(req, res) {
    const { userId, teamId } = req.params;
    const response = await axios.delete(`${url}/users/${userId}/team/${teamId}`).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

// Team
export async function createTeam(req, res) {
    const response = await axios.post(`${url}/team`, req.body).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

// UserPelada
export async function addUserPelada(req, res) {
    const response = await axios.post(`${url}/peladaUser`, req.body).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

export async function removeUserPelada(req, res) {
    const { userId, peladaId } = req.params;
    const response = await axios.delete(`${url}/users/${userId}/pelada/${peladaId}`).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

export async function togglePresence(req, res) {
    const { userId, peladaId } = req.params;
    const response = await axios.put(`${url}/users/${userId}/pelada/${peladaId}`, req.body).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

export async function listPlayersPresent(req, res) {
    const { peladaId } = req.params;
    const response = await axios.get(`${url}/pelada/${peladaId}/users-presents`).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

export async function highlightsOfGame(req, res) {
    const { peladaId } = req.params;
    const response = await axios.get(`${url}/pelada/${peladaId}/highlights-of-game`).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}

export async function insertPhotoPelada(req, res) {
    const response = await axios.get(`${url}/files`, req.body).catch(err =>{
        return res.status(400).json({message:err.message});
    });
    return res.json(response.data);
}
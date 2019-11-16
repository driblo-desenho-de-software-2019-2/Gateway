import axios from 'axios';

// Pelada
export async function createPelada(req, res) {
    const response = await axios.post(`http://driblo:8001/pelada`, req.body);
    return res.json(response.data);
}

export async function getPelada(req, res) {
    const { peladaId } = req.params;
    const response = await axios.get(`http://driblo:8001/pelada/${peladaId}`);
    return res.json(response.data);
}

export async function updatePelada(req, res) {
    const { peladaId } = req.params;
    const response = await axios.get(`http://driblo:8001/pelada/${peladaId}`, req.body);
    return res.json(response.data);
}

export async function deletePelada(req, res) {
    const { peladaId } = req.params;
    
}

// User
export async function createUser(req, res) {
    const response = await axios.post(`http://driblo:8001/user`, req.body);
    return res.json(response.data);
}

export async function getUser(req, res) {
    const { userId } = req.params;
    const response = await axios.get(`http://driblo:8001/user/${userId}`);
    return res.json(response.data);
}

export async function updateUser(req, res) {
    const { userId } = req.params;
    const response = await axios.get(`http://driblo:8001/user/${userId}`, req.body);
    return res.json(response.data);
}

export async function deleteUser(req, res) {
    const { userId } = req.params;
    
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
    const response = await axios.get(`http://driblo:8001/rule/${ruleId}`, req.body);
    return res.json(response.data);
}

export async function deleteRule(req, res) {
    const { ruleId } = req.params;
    
}

// Goal
export async function createGoal(req, res) {
    const response = await axios.post(`http://driblo:8001/goal`, req.body);
    return res.json(response.data);
}

// UserTeam
export async function createUserTeam(req, res) {
    const response = await axios.post(`http://driblo:8001/userteam`, req.body);
    return res.json(response.data);
}

export async function deleteUserTeam(req, res) {
    const { userteamId } = req.params;
    
}

// Team
export async function createTeam(req, res) {
    const response = await axios.post(`http://driblo:8001/team`, req.body);
    return res.json(response.data);
}

// PeladaUser
export async function createPeladaUser(req, res) {
    const response = await axios.post(`http://driblo:8001/peladauser`, req.body);
    return res.json(response.data);
}

export async function deletePeladaUser(req, res) {
    const { peladauserId } = req.params;
    
}
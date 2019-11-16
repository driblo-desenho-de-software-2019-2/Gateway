import axios from 'axios';

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
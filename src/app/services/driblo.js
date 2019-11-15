import axios from 'axios';

export async function getPelada(req, res) {
    const { peladaId } = req.params;
    const response = await axios.get(`http://driblo:8001/pelada/${peladaId}`);
    return res.json(response.data);
}
import axios from 'axios';

export default async function (req, res, next) {
  const url = "http://web:8002/auth"

  const headers = {
    authorization: req.headers.authorization,
  }
  
  await axios.get(url, {headers}).catch(err =>{
      res.status(400).json({message:err.message});
  });

  return next();
}
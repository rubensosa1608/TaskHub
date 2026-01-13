import { verifyToken } from '../utils/jwt.js';

export function authMiddleware(req, res, next) {
  
  if (req.method === 'OPTIONS') return next();

  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      const err = new Error('Token no proporcionado');
      err.status = 401;
      throw err;
    }

    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer' || !token) {
      const err = new Error('Formato de token inválido');
      err.status = 401;
      throw err;
    }

    const payload = verifyToken(token);
    req.user = payload;

    next();
  } catch (error) {
    error.status = 401;
    next(error);
  }
}

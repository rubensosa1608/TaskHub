import { verifyToken } from '../utils/jwt.js';

export function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    // 1️⃣ ¿Viene el header?
    if (!authHeader) {
      const err = new Error('Token no proporcionado');
      err.status = 401;
      throw err;
    }

    // 2️⃣ Formato correcto: Bearer TOKEN
    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer' || !token) {
      const err = new Error('Formato de token inválido');
      err.status = 401;
      throw err;
    }

    // 3️⃣ Verificar token
    const payload = verifyToken(token);

    // 4️⃣ Guardar info del usuario para el resto de la request
    req.user = payload;

    next();
  } catch (error) {
    error.status = 401;
    next(error);
  }
}

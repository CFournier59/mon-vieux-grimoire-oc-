const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'oY7iF!qhxi$KytG#ji3!fhbGksyQq?45PpbGr5g!5itTzE8z$m6JbSki46YoTpDJ');
    const userId = decodedToken.userId;
    req.auth = { userId: userId };
    next();
  } catch (error) {
    res.status(401).json({ error });
  }}
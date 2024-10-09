const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  
  try {
    const decoded = jwt.verify(token, 'fsdfasdfknindfjsknfsdgsdfeedddss');
    req.user = decoded.user;
    console.log("authenticated");
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

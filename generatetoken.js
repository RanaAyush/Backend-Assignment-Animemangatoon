const jwt = require('jsonwebtoken');
const payload = {
  user: {
    id: 'user01', 
  },
};

const token = jwt.sign(
  payload,
  'fsdfasdfknindfjsknfsdgsdfeedddss', 
  { expiresIn: '1h' }    
);

console.log('Generated Token:', token);

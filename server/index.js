const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.REACT_APP_SERVER_PORT || 3001;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);

const data = require('./db.json');

router.post('/authenticate', (req, res) => {
  // find if any user matches login credentials
  const filteredUsers = data.users.filter(user => {
    return user.username === req.body.username && user.password === req.body.password;
  });

  if (filteredUsers.length) {
    // if login details are valid return 200 OK with user details and fake jwt token
    const user = filteredUsers[0];
    res.json({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      address: user.address,
      phone: user.phone,
      website: user.website,
      token: 'fake-jwt-token'
    });
  } else {
    // else return 400 bad request
    res.status(400).json({ error: 'Username or password is incorrect' });
  }
});

app.listen(port, () => console.log('Running on localhost 3001'));
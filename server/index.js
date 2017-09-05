const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.REACT_APP_SERVER_PORT || 3001;
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.load();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Request-Headers", "*");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
  next();
});
app.use('/api', router);

const data = require('./db.json');

router.post('/authenticate', (req, res) => {
  // Fake response time
  setTimeout(function () {
    // find if any user matches login credentials
    const filteredUsers = data.users.filter(user => {
      return user.username === req.body.username && user.password === req.body.password;
    });

    if (filteredUsers.length) {
      // if login details are valid return 200 OK with user details and fake jwt token
      const user = filteredUsers[0];
      const token = jwt.sign({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        address: user.address,
        phone: user.phone,
        website: user.website,
      }, process.env.REACT_APP_JWT_SECRET_KEY);
      res.json({ token });
    } else {
      // else return 400 bad request
      res.status(400).json({ errors: { msg: 'Username or password is incorrect' } });
    }
  }, 1000);
});

app.listen(port, () => console.log('Running on localhost ' + port));
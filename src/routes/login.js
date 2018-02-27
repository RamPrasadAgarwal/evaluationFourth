const fetchUserDetails = require('../utils/helpers/fetchUserDetails');
const createUser = require('../utils/helpers/createUser');

module.exports = {
  method: 'POST',
  path: '/login',
  handler: (req, res) => {
    const formData = req.payload;
    fetchUserDetails(formData.username)
      .then((user) => {
        if (user.length === 0) {
          createUser(formData.username)
            .then((details) => {
              console.log('true');
              res(details.dataValues).code(201);
            });
        } else {
          res(user[0].dataValues).code(200);
        }
      });
  },
};

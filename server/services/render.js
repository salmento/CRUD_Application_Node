const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    // eslint-disable-next-line no-undef
    axios.get(`http://localhost:${process.env.PORT || 8080}/api/users`)
        .then(function (response) {
            res.render('index', { users: response.data });
        })
        .catch(err => {
            res.send(err);
        })

}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.update_user = (req, res) => {
    // eslint-disable-next-line no-undef
    axios.get(`http://localhost:${process.env.PORT || 8080}/api/users`, { params: { id: req.query.id } })
        .then(function (userdata) {
            res.render('update_user', { user: userdata.data })
        })
        .catch(err => {
            res.send(err);
        })
}
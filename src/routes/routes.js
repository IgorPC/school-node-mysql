const user = require('./files/user');
const role = require('./files/role');
const classes = require('./files/class');
const level = require('./files/level');
const registration = require('./files/registration');

const routes = (app) => {

    app.get('/', (req, res) => {
        res.status(200).json({
            message: "Api Working"
        })
    });

    app.use(user);
    app.use(role);
    app.use(classes);
    app.use(level);
    app.use(registration);
}

module.exports = routes;
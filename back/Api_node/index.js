const express      = require('express');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const cors         = require('cors');
const UserRoute = require('./Route/UserRoute');
const MissionRoute = require('./Route/MissionRoute');
// const indexRouter = require('./routes/v1/index');
const mongodb     = require('./Models/dbconn');

mongodb.initClientDbConnection();

const app = express();

app.use(cors({
    exposedHeaders: ['Authorization'],
    origin: '*'
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/v1', indexRouter);
app.use(express.json());
app.use(cors())
app.use('/user', UserRoute);
app.use('/mission', MissionRoute);
app.get('/', (res, req) => res.send('Ca marche putain'));

app.listen(5500, () => console.log('Server 5500'));
app.use(function(req, res, next) {
    res.status(404).json({name: 'API', version: '1.0', status: 404, message: 'not_found'});
});

module.exports = app;
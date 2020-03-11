
// req.query = Acessar query params (url?id=xx&idade=xxx)
// req.params = Acessar route params (url/xx/yy)
// req.body = Acessar o corpo da requisição (post form)


const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload')
const SessionController = require('./controllers/SessionController');
const SpotController    = require('./controllers/SpotController');
const DashboardController    = require('./controllers/DashboardController');
const BookingController    = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'),SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

// routes.get('/', (req,res) => {
//     return res.message({});
// });


module.exports = routes;



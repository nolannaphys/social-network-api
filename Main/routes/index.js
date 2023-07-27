const router = require('express').Router();
const apiRoutes = require('./api');
const userRoutes = require('./userRoutes');

router.use('/api', apiRoutes);
router.use('/users', userRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;

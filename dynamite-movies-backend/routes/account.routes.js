const express = require('express');
const router = express.Router();
const AccountCtrl = require('../controllers/account.controllers');

router.get('/Login', AccountCtrl.getAccounts);
router.post('/Register', AccountCtrl.createAccount);
router.put('/Forgot-Password', AccountCtrl.changePassword);
router.put('/Change-Last-Seen', AccountCtrl.changeMoviesSeen);
router.put('/Edit-Account', AccountCtrl.modifyAccountInformation);

module.exports = router;
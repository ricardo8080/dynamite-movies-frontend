const express = require('express')
const router = express.Router()
const AccountCtrl = require('../../account-person/controllers/account.controllers')

router.get('/dynamite-test', PersonCtrl.getList)
router.post('/dynamite-test', PersonCtrl.savePerson)
router.put('/dynamite-test', PersonCtrl.putCommand)
router.delete('/dynamite-test', PersonCtrl.deleteCommand)
module.exports = router
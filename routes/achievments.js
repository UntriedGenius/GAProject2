const express = require('express')
const router = express.Router()
const achievmentsCtrl = require('../controllers/achievments')

router.post('/games/:id/achievments', achievmentsCtrl.create),
router.delete('/games/gameId/achievments/achievmentId', achievmentsCtrl.deleteIt)

module.exports = router
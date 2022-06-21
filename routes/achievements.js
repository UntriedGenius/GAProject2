const express = require('express')
const router = express.Router()
const achievementsCtrl = require('../controllers/achievements')

router.post('/games/:id/achievements', achievementsCtrl.create),
// router.delete('/games/gameId/achievments/achievmentId', achievmentsCtrl.deleteIt)

module.exports = router
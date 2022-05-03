const express = require('express');
const router = express.Router();
const MissionController = require('../Controller/MissionController');

router.get('/', MissionController.getAllMissions);
router.post('/create', MissionController.postMissions);
router.get('/:id', MissionController.getMissions);
router.put('/:id', MissionController.putMissions);
router.delete('/:id', MissionController.deleteMissions);

module.exports = router;
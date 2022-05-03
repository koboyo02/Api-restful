const { MissionModel } = require('../Models/MissionModel');

exports.getAllMissions = async(req, res) => {
    const Mission = await MissionModel.find();
    res.send(Mission);
};

//          CREATE            //
exports.postMissions = async(req, res) => {
    const NewMission = new MissionModel({
        company_name: req.body.company_name,
        job: req.body.job,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        address: req.body.address,
        salary: req.body.salary
    });
    try {
        const SaveMission = await NewMission.save();
        res.send(SaveMission);
    } catch (err) {
        res.send(err);
    }
};

//          READ            //
exports.getMissions = async(req, res) => {
    try {
        const Mission = await MissionModel.findById(req.params.id);
        res.send(Mission);
    } catch (err) {
        res.send(err);
    }
};

//          UPDATE           //
exports.putMissions = async(req, res) => {
    try {
        const UpdateMission = await MissionModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.send(UpdateMission);
    } catch (err) {
        res.send(err);
    }
};

//          DELETE          //
exports.deleteMissions = async(req, res) => {
    try {
        await MissionModel.findByIdAndDelete(req.params.id)
        res.send("Mission is delete");
    } catch (err) {
        res.send(err);
    }
};
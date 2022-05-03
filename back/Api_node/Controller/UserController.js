const { UserModel } = require('../Models/UserModel');
const { MissionModel } = require('../Models/MissionModel');

exports.getUsers = async(req, res) => {
    const Users = await UserModel.find();
    res.send(Users);
};

//          REGISTER            //
exports.register = async(req, res) => {
    const NewUser = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
    });
    try {
        const SaveUser = await NewUser.save();
        res.send(SaveUser);
    } catch (err) {
        res.send(err);
    }
};

//          LOGIN           //
exports.login = async(req, res) => {
    try {
        const User = await UserModel.findOne({
            username: req.body.username,
            password: req.body.password
        });
        !User && res.send({message : "Login or password is wrong"});
        res.send(User);
    } catch (err) {
        res.send(err);
    }
};

//          UPDATE           //
exports.updateCreneau = async(req, res) => {
    try {
        const UpdateCreneau = await UserModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.send(UpdateCreneau);
    } catch (err) {
        res.send(err);
    }
};

//          DELETE          //
exports.deleteUser = async(req, res) => {
    try {
        await UserModel.findByIdAndDelete(req.params.id)
        res.send("User is delete");
    } catch (err) {
        res.send(err);
    }
};

//          MATCHING        //
exports.matching = async(req, res) => {
    try {
        const User = await UserModel.findById(req.params.id);
        const Mission = await MissionModel.find();
        start_date = User.start_time.valueOf().toString();
        end_date = User.end_time.valueOf().toString(); 
        for (let i=0;i<Mission.length; i++) {
        start_creneau = Mission[i].start_date.valueOf().toString();
        end_creneau = Mission[i].end_date.valueOf().toString();
        if ( start_creneau >= start_date && end_creneau <= end_date) {
            console.log(Mission[i])
        }
    }
    } catch (err) {
        res.send(err);
    }
};

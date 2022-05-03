const mongoose = require('mongoose');
const { Schema } = mongoose;

const MissionSchema = new Schema({
    company_name: {
        type: String,
        require: true
    },
    job: {
        type: String,
        require: true
    },
    start_date: {
        type: Date,
        require: true
    },
    end_date: {
        type: Date,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    salary: {
        type: Number,
        require: true
    },
});

const MissionModel = mongoose.model(
    "Mission",
    MissionSchema
);

module.exports = { MissionModel };

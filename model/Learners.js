

const mongoose = require('mongoose');

const LearnerSchema = new mongoose.Schema({
    learner_name:{type:String,required:true},
    learner_email:{type:String,required:true},
    learner_password:{type:String,required:true}
})


module.exports = mongoose.model("learners",LearnerSchema)
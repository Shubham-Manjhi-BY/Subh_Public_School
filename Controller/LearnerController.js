const LearnerModel = require("../model/Learners")

exports.getAllLearner = (req,res) =>{
    LearnerModel.find().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
}


exports.getLearnerByFilter = (req,res) =>{
    var data = req.body;
    var filter = {};
    for (const key in data) {
        filter[key] = data[key]
    }

    LearnerModel.find(filter).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
}

exports.UpdateLearnerByFeilds = (req,res) =>{
        var data = req.body;

        var filter = {};
        for (const key in data) {
            filter[key] = data[key]
        }
        
        LearnerModel.updateOne(filter).then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err);
        })
}

exports.DeleteLearnerByFeilds = (req,res) =>{
    var data = req.body;

        var filter = {};
        for (const key in data) {
            filter[key] = data[key]
        }
        
        LearnerModel.deleteOne(filter).then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err);
        })
}

exports.addLearner = (req,res) => {
    const learner = new LearnerModel({
        learner_name:req.body.learner_name,
        learner_email:req.body.learner_email,
        learner_password:req.body.learner_password
    });
    learner.save().then((data)=>{
        res.send("Data Saved Successfully");
    }).catch((err) => {
        res.send(err);
    })
}
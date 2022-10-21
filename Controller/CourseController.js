const CourseModel = require("../model/Courses")

exports.getAllCourse = (req,res) =>{
    CourseModel.find().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
}


exports.getCourseByFilter = (req,res) =>{
    var data = req.body;
    var filter = {};
    for (const key in data) {
        filter[key] = data[key]
    }

    CourseModel.find(filter).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
}

exports.UpdateCourseByFeilds = (req,res) =>{
        var data = req.body;

        var filter = {};
        for (const key in data) {
            filter[key] = data[key]
        }
        
        CourseModel.updateOne(filter).then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err);
        })
}

exports.DeleteCourseByFeilds = (req,res) =>{
    var data = req.body;

        var filter = {};
        for (const key in data) {
            filter[key] = data[key]
        }
        
        LearnerCourse.deleteOne(filter).then((data) => {
            res.send(data);
        }).catch((err) => {
            res.send(err);
        })
}

exports.addCourse = (req,res) => {
    const course = new CourseModel({
        course_id:req.body.course_id,
        course_name:req.body.course_name,
        course_description:req.body.course_description
    });
    course.save().then((data)=>{
        res.send(data);
    }).catch((err) => {
        res.send(err);
    })
}
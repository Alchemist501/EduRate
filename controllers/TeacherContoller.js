const fs = require('fs');
const path = require('path');
const randomNo = require('./../utils/randomNumberGenerator');
const QueryExecution = require('./../db').Query;
exports.TeacherReview = async (req,res,next)=>{
    try{
        const review = req.body.review;
        const rating = req.body.rating;
        const Teacher_name = req.body.Teacher_name;
        const Student_name = null;
        const reviewID = randomNo('R');
        console.log(reviewID); 
        const query = 'INSERT INTO review VALUES(?,?,?,?,?)';
        const values = [reviewID,Student_name,Teacher_name,review,rating];
        await QueryExecution(query,values).then(
            res.status(200).json({
                status:'success',
                message :'review added'
            })
        );
        next();
    }catch(err){
        res.status(500).json({
            status:'failed',
            err
        });
        throw err;
    }
        
}
exports.getTeacher=async (req,res,next)=>{
    let ID = req.params.id;
    const teachersData = JSON.parse(fs.readFileSync(path.join(__dirname, 'teachers.json')));
    const teacher = teachersData.find(teacher => teacher.teacher_id === ID);
    // If teacher not found, return 404 Not Found
    if (!teacher) {
        return res.status(404).send('Teacher not found');
    }
  // Render the webpage using Pug template engine
    if(ID =='TDBMS'){
        reviewData = JSON.parse(fs.readFileSync(path.join(__dirname,'josna.json')));
    }else if(ID === 'TCO'){
        reviewData = JSON.parse(fs.readFileSync(path.join(__dirname,'veena.json')));
    }else if(ID === 'TPE'){
        reviewData = JSON.parse(fs.readFileSync(path.join(__dirname,'nimmya.json')));
    }else if(ID ==='TOS'){
        reviewData = JSON.parse(fs.readFileSync(path.join(__dirname,'maria.json')));
    }else if(ID ==='TPRE'){
        reviewData = JSON.parse(fs.readFileSync(path.join(__dirname,'krishnadas.json')));
    }else{
        reviewData = JSON.parse(fs.readFileSync(path.join(__dirname,'ashwathy.json')));
    }
    res.render('teacher', { teacher ,reviewData});
    next();
};
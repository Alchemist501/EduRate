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
    res.render('teacher', { teacher });
    // if(ID =='TDBMS'){
    //     res.render('JOSNA');
    // }else if(ID === 'TCO'){
    //     res.render('VEENA');
    // }else if(ID === 'TPE'){
    //     res.render('NIMMYA');
    // }else if(ID ==='TOS'){
    //     res.render('MARIA');
    // }else if(ID ==='TPRE'){
    //     res.render('KRISHNADAS');
    // }else{
    //     res.render('ASHWATHY')
    // }
    next();
};
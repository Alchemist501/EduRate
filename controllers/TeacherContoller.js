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
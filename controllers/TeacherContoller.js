const QueryExecution = require('./../db').Query;
exports.TeacherReview = async (req,res,next)=>{
    try{
        const review = req.body.review;
        const rating = req.body.rating;
        const Teacher_name = req.body.Teacher_name;
        const Student_name = null;
        // Function to generate a random string of specified length
        function generateRandomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        // Function to generate a random ID starting with "R"
        function generateRandomID() {
            const prefix = 'R'; // Starting character
            const randomSuffix = generateRandomString(7); // Generate a random string of length 7
            return prefix + randomSuffix;
        }
        const reviewID = generateRandomID();
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
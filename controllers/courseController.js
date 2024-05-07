const randomGenerator = require('./../utils/randomNumberGenerator');
const QueryExecution = require('./../db').Query;
exports.getCourses =async (req,res,next)=>{
    try{
        let Courses = [
            {name:'DBMS',teacher : 'TDBMS'},
            {name:'Computer Organization',teacher:'TCO'},
            {name:'Operating Systems',teacher:'TOS'}
        ];
        const query = 'INSERT INTO COLLEGE.Courses VALUES(?,?,?,?)';
        let values,randomchar,i=0;
        let randomID = [];
        for(let Course in Courses){
            randomchar = randomGenerator('C');
            randomID.push(randomchar);
            values = [randomID[randomID.length-1],Courses[i].name,Courses[i++].teacher,66];
            await QueryExecution(query,values);
        }
        // res.status(200).json({
        //     status:'success',
        //     message :'Course added',
        //     Courses,
        //     randomID
        // });
        return next(); 
    }catch(err){
        res.status(500).json({
            status:'failed',
            err
        });
        throw err;
    }
}
let examModel = require('../models/exam.model');

module.exports.exam = async(req,res)=>{
        let getdata = await examModel.find();

        //use promise
        // function promise(){
        //         return new Promise(function(resolve,reject){
        //                 resolve(examModel.find());
        //         });
        // };

        // promise().then(function(getdata){
        //         send(getdata);
        // })

        // function send(datatest){
        //         res.render('exam/index_exam', {
        //                 data:datatest
        //         });
        // }
       
        res.render('exam/index_exam', {
                data:getdata
        });
        
};

module.exports.getlistexam = (req,res)=>{
        
}
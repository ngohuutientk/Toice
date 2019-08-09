let userModel = require('../models/user.model');

module.exports.signup = (req, res) => {

    res.render('users/signup');
}

module.exports.postCreate = async (req, res) => {

    let userInfo = req.body;

    try {

        let users = await userModel.find({
            email: userInfo.email
        });

        if (users.length === 0) {
            let user = await userModel.create(userInfo);
            res.redirect('/users/login');
        }
        else {
            res.render('users/login', function(err, html) {
                console.log(html + 'aaaa');
                res.send(html);
            });
        }
    } catch (error) {
        res.send('loi');
    }
}
module.exports.login = (req, res) => {

    res.render('users/login');

}

module.exports.postLogin = async (req, res) => {

    let userInfo = req.body;

    try {
        let users = await userModel.find({
            email: userInfo.email
        });


        if (users[0].email === userInfo.email && users[0].password === userInfo.password) {
            res.redirect('/tests');
        }
        else {
            res.send('tai khoan khong hop le');
        }




    } catch (error) {
    }

}
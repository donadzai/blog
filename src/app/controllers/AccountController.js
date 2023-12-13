const Account = require('../models/Account');
const jwt = require('jsonwebtoken');

class AccountController {
    // [GET] /login
    loginDisplay(req, res) {
        res.render('authencation/login', { layout: 'loginLayout' });
    }

    async loginAction(req, res) {
        const user = await Account.findOne({ username: req.body.userName, password: req.body.passWord }).exec();
        if (user) {
            const token = jwt.sign({ userName: user.username }, 'mk');
            res.json({
                token,
            });
            // res.render('authencation/pageWelcome', { token });
        } else {
            res.json({
                message: 'Tai khoan hoac mat khau cua ban khong dung',
            });
        }
    }

    welcomeDisplay(req, res) {
        res.redirect('/login');
    }
}

module.exports = new AccountController();

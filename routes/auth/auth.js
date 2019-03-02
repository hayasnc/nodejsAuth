var connection = require('../../database');
var Cryptr = require('cryptr');
const cryptr = new Cryptr('6pGBHAcjyf');
var jwt = require('jsonwebtoken');
const config = require('./../../config');

exports.register = function (req, res) {
    // console.log("req",req.body);
    var today = new Date();
    var users = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: cryptr.encrypt(req.body.password),
        phone: req.body.phone,
        created: today,
        modified: today
    };
    connection.query("INSERT INTO users SET ?", users, function (
        error,
        results,
        fields
    ) {
        if (error) {
            console.log("error ocurred", error);
            res.send({
                code: 400,
                failed: "error ocurred"
            });
        } else {
            console.log("The solution is: ", results);
            res.send({
                code: 200,
                success: "user registered sucessfully",
                results: results
            });
        }
    });
};

exports.login = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    connection.query('SELECT * FROM users WHERE email = ?', [email], function (error, results, fields) {
        if (error) {
            // console.log("error ocurred",error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        } else {
            // console.log('The solution is: ', results);
            if (results.length > 0) {
                console.log(results);
                if (cryptr.decrypt(results[0].password) === password) {
                    const user = {
                        "idusers": results[0].idusers,
                        "email": results[0].email
                    }
                    jwt.sign({user}, config.secret, (err, token) => {
                        res.send({
                            "code": 200,
                            "success": "login sucessfull",
                            "results": results[0],
                            "token": token
                        });
                    });

                }
                else {
                    res.send({
                        "code": 204,
                        "success": "Email and password does not match"
                    });
                }
            }
            else {
                res.send({
                    "code": 204,
                    "success": "Email does not exits"
                });
            }
        }
    });
};

exports.test = function (req, res) {
    res.json({
        message: req.body.userId
    });
}
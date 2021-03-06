const sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const db = require('../models');
const Users = db.users;


const nodemailer = require('nodemailer');
const constants = require('../config/constants');

const showIfErrors = require('../helpers/showIfErrors');


exports.login = async (req, res) => {

    // Checking validation result from express-validator
    if (!showIfErrors(req, res)) {
        // Getting request data and setting user fields to return
        let data = req.body;
        let email = data.email.trim();

        let attributes = [`first_name`, `last_name`, 'email', 'profile_img', 'password', 'id', 'status_id'];

        // Active status selecting
        let statusWhere = sequelize.where(sequelize.col('`users_status`.`name_en`'), 'active');


        // Selecting an employee that has an email matching request one
        let user = await Users.findOne({
            attributes: attributes,
            include: [],
            where: {email: email} //userTypeWhere
        }, res);


        if (!res.headersSent) {


            // User is not active
            if (!user) res.status(500).json({msg: 'You don\'t have such privileges or the account is inactive'});

            else {
                // Cloning users object without password and saving user full name
                let {password, ...details} = user.toJSON();
                let full_name = user[`first_name`] + ' ' + user[`last_name`];


                res.status(200).json({
                    token: jwt.sign(details, 'secretkey', {expiresIn: '8h'}), user_id: user.id, full_name: full_name
                })
            }


        }
    }
};

exports.logout = (req, res) => {
    req.logout();
    res.status(200).json({msg: 'OK'})
};

exports.register = (req, res) => {
    console.log('registerssss')
};


exports.sendConfirmationCodeEmail = (req, res) => {
    if (!showIfErrors(req, res)) {
        // send mail with defined transport object
        constants.transporter.sendMail(constants.confirmationCodeMailOptions, (error, info) => {
            if (error) {
                res.status(500).json({msg: error.toString()})
            } else if (info) {

                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                res.json("OK");
            }


        });
    }





};

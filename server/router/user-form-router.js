const express = require('express');
const router = express.Router()
const adminController = require('../controller/admin-controller')
// const loginSchema = require('../validation/admin-validation');
const multer = require('multer');
const Userform = require('../model/user-form-model')
const cloudinary = require('../utils/cloudinay')
const path = require('path');

//storage and file name setting 
let storage = multer.diskStorage({
    destination : path.join(__dirname, '../images'),
    filename: (req, file, cb) => {
        // cb(null,Date.now()+file.originalname)
        cb(null, file.originalname)
    }
})
// router.route('/login').post(validate(loginSchema),userController.login);

const upload = multer({
    storage: storage
})

router.route('/dashboard').get(adminController);
router.post('/data', upload.single('avatar'), async (req, res, next) => {

    // uploadOnCloudinary(req.file.path)
    cloudinary.uploader
        .upload(req.file.path, function (err, result) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: false,
                    message: "Error"
                })
            }})
            const response = await Userform.create({
                name: req.body.name,
                socialmedia: req.body.socialmedia,
                picture: req.file.filename
            })
            res.send("succesfully hit the api")
            next();
        });



    module.exports = router;
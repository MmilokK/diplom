const Router = require("express");
const User = require("../models/User");
const router = new Router();
const bcrypt = require("bcryptjs");
const {check, validationResult} = require("express-validator")
const jwt = require("jsonwebtoken")
const config = require("config")
const authMiddleware = require('../middleware/auth.middleware')

router.post('/registration', 
[
    check('email').isEmail().withMessage('Uncorrect email'),
    check('password').isLength({min:3, max:12}).withMessage('Password must be longer than 3 and shorter than 12')
],
async (req, res)=> {
    
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            console.log(errors.array())
            return res.status(422).json({ errors: errors.array() });
            
        }
        const {email, password} = req.body
        const candidate = await User.findOne({email})
        if (candidate) {
            return res.status(400).json({message: `User with email ${email} already exist`})
        }
        const hashPassword = await bcrypt.hash(password, 8)
        const user = new User({email, password: hashPassword})
        await user.save()
        return res.json({message: "User was created"})
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }

})

router.post('/login', 
async (req, res)=> {
    
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if (!user) {
            return res.status(404).json({message: "User not found"})
        }
        const isPassValid = bcrypt.compareSync(password, user.password)
        if(!isPassValid){
            return res.status(400).json({message: "Invalid password"})
        }
        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
            }
        })
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }

})


router.get('/auth', authMiddleware,
async (req, res)=> {
    
    try {
        const user = await User.findOne({_id: req.user.id})
        const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
        return res.json({
            token,
            user: {
                id: user.id,
                email: user.email,
            }
        })
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }

})



module.exports = router
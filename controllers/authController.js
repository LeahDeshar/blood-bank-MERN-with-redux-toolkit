const User = require("../models/userModel");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const registerController = async (req,res) =>
{
    try {

        const isExist = await User.findOne({email: req.body.email})
        if(isExist)
        {
            return res.status(200).json({
                message: "User already registered",
                success: false,
            })
        }

        // password hashed
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt)
        req.body.password =hashedPassword;
        const user = new User(req.body);
        user.save()
        return res.status(200).json({
            message: "User registered successfully",
            success:  true,
            user
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error in register",
            success: false,
            error
        })
    }
}
const loginController = async (req,res) =>
{
    try {
        const {email,password} =req.body;
        const isExist = await User.findOne({email})
        if(!isExist)
        {
            return res.status(404).json({
                message: "No such user",
                success: false,
            })
        }

        // compare password
        const isMatch = await bcrypt.compare(password,isExist.password)
        if(!isMatch)
        {
            return res.status(404).json({
                message: "Invalid Information",
                success: false,
            })
        }

        const token =  jwt.sign({userId: isExist._id},process.env.JWT_KEY,{expiresIn: '30d'})

        return res.status(200).json({
            message: "Login Success",
            success: true,
            token,
            isExist
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error in Login",
            success: false,
            error
        })
    }
}
const currentUserController = async (req,res) =>
{
    try {
        console.log("here");
        const user = await User.findOne({_id: req.body.userId});
        return res.status(200).json({
            message: "Fetched user successfully",
            success: true,
            user
        })
    } catch (error) {
        return res.status(500).json({
            message: "Unable to get current user",
            success: false,
            error
        })
    }
}

module.exports = {registerController,loginController,currentUserController}
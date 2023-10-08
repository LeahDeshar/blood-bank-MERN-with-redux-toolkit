const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");



exports.createInventoryController = async (req,res) =>
{
    try {
        const {email,inventoryType} = req.body;
        const isExistUser = await userModel.findOne({email});

        // check if the user exist using email
        
        if(!isExistUser)
        {
            return res.status(500).json({
                message: "User Not Found",
                success: false,
            })
        }

        // we have two types for inventoryType
        // in and out 
        // check if the inventoryType is in or out

        //when blood is received from a donor and added to the inventory, the inventoryType for that item would be "in".

        // donar donates so they cant have inventoryType as in
        // if(inventoryType === "in" && isExistUser.role !== 'donar')
        // {
        //     return res.status(500).json({
        //         message: "Not a Donar account",
        //         success: false,
        //         error
        //     })

        // }

        // hospital receives the blood from out 
        // they should have in as the inventoryType

        if(inventoryType === "out" && isExistUser.role !== 'hospital')
        {
            return res.status(500).json({
                message: "Not a hospital account",
                success: false,
            })
        }

        // After validation save the record

        const inventory = new inventoryModel(req.body)
        await inventory.save()
        return res.status(201).json({
            message: "Inventory Creation Success",
            success: true,
            inventory
        })


    } catch (error) {
        return res.status(500).json({
            message: "Error in creating inventory API",
            success: false,
            error
        })
    }
}


exports.getInventoryController = async (req,res) =>
{
    try {
        const inventory = await inventoryModel.find({organisation: req.body.userId})
        .populate("donar").populate("hospital").sort({createdAt: -1});

        return res.status(200).json({
            message: "All the records fetched",
            success: true,
            inventory
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error in Getting inventory API",
            success: false,
            error
        })
    }
}
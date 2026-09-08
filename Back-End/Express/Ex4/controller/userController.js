import { json } from "body-parser";
import user from "../model/userModel.js"

export const create = async(req,res) => {
    try{
        const userData = new user(req.body);
        const {email} =userData;

        const userExist = await user.findOne({email});
        if(userExist){
            return res.status(400),json({message:"User already exist"});
        }
        const saveUser = await userData.save();
        res.status(200).json(saveUser);
    }catch{
        res.status(500).json({error:"Internal server error."})
    }
}

export const getAllData = async(req,res) => {
    try{
        const allData = await user.find();
        if(allData){
            return res.status(200).json(allData);
        }
        return res.status(400).json({message:"No Data exist"});
    }catch(error){
        res.status(500).json({error:"Internal Server Error"});
    }
}
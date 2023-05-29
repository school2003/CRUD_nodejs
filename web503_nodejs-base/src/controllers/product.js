import Product from "../models/product"
import { productSchema } from "../schemas/product"
export const getAll = async(req,res)=>{
    try {
        const products=await Product.find()
        return res.status(200).json(products)
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}
export const get = async(req,res)=>{
    try {
        const product=await Product.findById(req.params.id)
        return res.status(200).json(product)
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}
export const create = async(req,res)=>{
    try {
        const{error} = productSchema.validate(req.body,{abortEarly:false})
        if(error){
            return res.status(400).json({
                message:error.details.map((err)=>err.message)
            })
        }
        const product=await Product.create(req.body)
        return res.status(200).json({
            data:product,
            message:"da tao san pham thanh cong"
        })
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}
export const update = async(req,res)=>{
    try {
        const product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).json({
            data:product,
            message:"cap nhat sp thanh cong"
        })
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}
export const remove = async(req,res)=>{
    try {
        const product=await Product.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            data:product,
            message:"xoa sp thanh cong"
        })
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}
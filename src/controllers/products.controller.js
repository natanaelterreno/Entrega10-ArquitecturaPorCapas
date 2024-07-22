import { productService } from "../service/index.js" 
 
 class ProductController {
    constructor(){
        this.productService = productService
    }

    getProducts = async (req, res) => {
        try {
            // const products = await productModel.find({})
            const products = await this.productService.getProducts
            res.send({status: 'success', payload: products})
        } catch (error) {
            console.log(error)
        }        
    }

    getProduct = async (req, res) => {
        try {
            const { pId } = req.params
        // const productFound = await productModel.findById({_id: pId})
        const productFound = await this.productService.getProductBy(pId)
        res.send({status: 'success', payload: productFound})
        } catch (error) {
            console.log(error)
        }        
    }

    createProduct = async (req, res) => {
        try {
            const { body } = req
        // const result = await productModel.create(body)
        const result = await this.productService.createProduct(body)
        res.send({status: 'success', payload: result})
        } catch (error) {
            console.log(error)
        }        
    }

    updateProduct = async (req, res) => {
        try {
            const { pId } = req.params
        const  prodToUpdate = req.body
        // const result = await productModel.updateOne({ _id: pId }, prodToUpdate)
        const result = await this.productService.updateProduct(pId, prodToUpdate)
        res.send({status: 'success', payload: result})
        } catch (error) {
            console.log(error)
        }        
    }

    deleteProduct = async (req, res) => {
        try {
            const { pId } = req.params
            // const result = await productModel.deleteOne({ _id: pId.trim() })
            const result = await this.productService.deleteProduct(pId)
            res.send({status: 'success', payload: result})
        } catch (error) {
            console.log(error)
        }        
    }
 }

 export default ProductController
import { userService } from "../service/index.js"
 
class UserController {
   constructor(){
       this.userService = userService
   }

   getUsers = async (req, res) => {
    try {
        //    const users = await userModel.find({})
       const users = await this.userService.getUsers
       res.send({status: 'success', payload: users})
    } catch (error) {
        console.log(error)
    }    
   }

   getUser = async (req, res) => {
    try {
        const { uId } = req.params
        //const userFound = await userModel.findById({_id: pId})
        const userFound = await this.userService.getUserBy(uId)
        res.send({status: 'success', payload: userFound}) 
    } catch (error) {
        console.log
    }       
   }

   createUser = async (req, res) => {
    try {
        const { body } = req
        //const result = await userModel.create(body)
        const result = await this.userService.createUser(body)
        res.send({status: 'success', payload: result}) 
    } catch (error) {
        console.log(error)
    }       
   }

   updateUser = async (req, res) => {
    try {
        const { uId } = req.params
       const  userToUpdate = req.body
       //const result = await userModel.updateOne({ _id: pId }, userToUpdate)
       const result = await this.updateUser(uId, userToUpdate)
       res.send({status: 'success', payload: result})
    } catch (error) {
        console.log(error)
    }       
   }

   deleteUser = async (req, res) => {
    try {
        const { uId } = req.params
        //const result = await userModel.deleteOne({ _id: pId.trim() })
        const result = await this.userService.deleteUser(uId.trim())
        res.send({status: 'success', payload: result}) 
    } catch (error) {
        console.log(error)
    }       
   }
}

export default UserController
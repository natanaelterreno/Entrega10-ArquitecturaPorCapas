import { userModel } from "../models/user.models.js"

export class UsersManager {
    constructor() {
        this.userModel = userModel;
    }

    // async getUsers({limit=10, numPage=1}) {
    //     const users = await this.userModel.paginate({}, {limit, page: numPage, sort: {price: -1}, lean: true})
    //     return users
    // }

    async getUsers() {
        const users = await this.userModel.find()
        return users
    }

    async getUserBy(filter) {
        return this.userModel.findOne(filter)
    }

    async getUserByEmail(email) {
        return this.users.find((user) => user.email === email)
    }
    
    async createUser(user) {
        return await this.userModel.create(user)
    }
}

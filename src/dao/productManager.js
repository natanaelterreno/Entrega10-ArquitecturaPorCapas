import productModel from '../models/product.models.js';

export class ProductsManager {
    constructor() {
        this.productModel = productModel;
    }

    async getProducts({limit=10, numPage=1}) {
        const products = await this.productModel.paginate({}, {limit, page: numPage, sort: {price: -1}, lean: true})
        return products
    }

    async getProductBy(filter) {
        return this.productModel.findOne(filter)
    }

    async createProduct(product) {
        return await this.productModel.create(product)
    }    
}

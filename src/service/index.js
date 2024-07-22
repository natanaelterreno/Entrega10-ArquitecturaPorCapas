import { UsersManager } from "../dao/userManager.js";
import { ProductsManager } from "../dao/productManager.js";


export const userService = new UsersManager()
export const productService = new ProductsManager()
// export const cartService = new CartsManager()
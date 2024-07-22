import Router from 'express'
// import productModel from '../../models/product.models.js'
import ProductController from '../../controllers/products.controller.js'

const router = new Router()
const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = new ProductController()

router.get('/', getProducts)

router.get('/:pId', getProduct)

router.post('/', createProduct)

router.put('/:pId', updateProduct)

router.delete('/:pId', deleteProduct)



// router.get('/', async (req, res) => {
//     try {
//         const { limit } = req.query;
//         const products = await productManager.getProducts();
    
//         if(limit){
//             res.send(products.slice(0, parseInt(limit)));
//         }
//         else {
//             res.send(products);
//         }        
//     } catch (error) {
//         res.send('Response: ' + res +' - Error: '+ error)
//     }
// });



// router.post("/", async (req, res) => {    
//     try {
//         let resp = await productManager.addProduct(req.body);        
//         res.send(resp);
//     } catch (error) {
//         res.send('Response: ' + res +' - Error: '+ error)
//     }
// });

// router.put("/:pId", async (req, res) => {
//     const id = parseInt(req.params.pId)
//     const product = {
//         id,
//         title: req.body.title,
//         description: req.body.description,
//         code: req.body.code,
//         price: req.body.price,
//         status: req.body.status || true,
//         stock: req.body.stock,
//         category: req.body.category,
//         thumbnails: req.body.thumbnails
//     };
//     try {        
//         let resp = await productManager.updateProduct(product);
//         res.send(resp)
//     } catch (error) {
//         res.send('Response: ' + res +' - Error: '+ error)        
//     }    
// })

// router.delete('/:pid', async (req, res) => {
//     try {
//         const { pid } = req.params;
//         const prod = await productManager.deleteProduct(parseInt(pid))
//         res.send(prod);        
//     } catch (error) {
//         res.send('Response: ' + res +' - Error: '+ error)
//     }
// });

export default router
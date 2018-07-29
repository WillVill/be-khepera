import productRoutes from './WooCommerce/products';
import express from 'express';

const router = express.Router()

router.get('/', (req, res) => {
	console.log('yolo swag monsta');
});

router.use('/products', productRoutes);

export default router;
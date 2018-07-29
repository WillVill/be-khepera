import WooCommerce from '../../connectors/wooCommerceConnector.js';
import express from 'express';

const router = express.Router()

router.get('/', (req, res) => {
	WooCommerce.get('products', function(err, req, products) {
		res.status(200).json({ products });
	});
});

export default router;
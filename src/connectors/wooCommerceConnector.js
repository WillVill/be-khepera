import WooCommerceAPI from 'woocommerce-api';
import { BASE_URI, WC_VERSION } from '../constants.js';

const WooCommerce = new WooCommerceAPI({
  url: BASE_URI,
  consumerKey: 'ck_7dd8000c65a7c8a0d534fe85143152ad10e4190c',
  consumerSecret: 'cs_6ddd77ce95d008ae0b85bd31325d35c13f59f91a',
  wpAPI: true,
  version: WC_VERSION
});

export default WooCommerce;

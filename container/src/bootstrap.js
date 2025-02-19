import { mount as productsAppMount } from 'products/ProductsIndex'
import { mount as cartAppMount } from 'cart/cartShow'

productsAppMount(document.querySelector('#microfrontend-products'))
cartAppMount(document.querySelector('#microfrontend-cart'))
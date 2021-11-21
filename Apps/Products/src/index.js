import products from './data/products'

console.log('products', products)

document.querySelector('#dev-products').innerHTML = products.map(name => `<div>${name}</div>`).join('')

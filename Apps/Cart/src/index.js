import products from './data/products'

document.querySelector('#products').innerHTML = products.map(name => `<div>${name}</div>`).join('')

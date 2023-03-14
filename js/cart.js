const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})


const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')

const productsList = document.querySelector('#cardContainer')

let allProducts = []

const totalvalue = document.querySelector('.total-pagar')
const countProducts = document.querySelector('#contador-productos')

const clearCart = document.getElementById('clearCart')


productsList.addEventListener('click', (e) => {
    // console.log(e.target.classList.contains('addToCart'))

    if(e.target.classList.contains('addToCart')){
        // console.log(e.target.parentElement.parentElement)

        const product = e.target.parentElement.parentElement

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('.card-title').innerText,
            price: parseFloat( (product.querySelector('.card-price').innerText).substring(1) ).toFixed(2)
        }

        const existProduct = allProducts.some(product => product.title === infoProduct.title)

        if(existProduct){
            const products = allProducts.map(product => {
                if(product.title === infoProduct.title){
                    product.quantity++
                    return product
                } else {
                    return product
                }
            })
            allProducts = [...products]
        } else {
            allProducts = [...allProducts, infoProduct]
        }


        renderProductsinCart()
    }
})

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement
        const title = product.querySelector('p').textContent

        allProducts = allProducts.filter(product => product.title !== title)

        renderProductsinCart()
    }
})

const renderProductsinCart = () => {

    // if(allProducts.length == 0){
    //     containerCartProducts.innerHTML = `
    //     <p class="cart-empty">El carrito está vacío</p>
    //     `
    // }
    
    rowProduct.innerHTML = ''

    let totalCart = 0
    let totalofProducts = 0

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div')
        containerProduct.classList.add('cart-product')

        containerProduct.innerHTML = `
        <div class="info-cart-product">
        <span class="cantidad-producto-carrito">${product.quantity}</span>
        <p class="titulo-producto-carrito">${product.title}</p>
        <span class="precio-producto-carrito">${product.price}</span>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="icon-close"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
        `

        rowProduct.append(containerProduct)

        totalCart = totalCart + parseInt(product.quantity * product.price)
        totalofProducts = totalofProducts + product.quantity
    })

    localStorage.setItem('ProductsInCart', JSON.stringify(allProducts))

    totalvalue.innerText = `$${totalCart}`
    countProducts.innerText = totalofProducts

}


function readProducts(){
    if (localStorage.getItem('ProductsInCart') != null) {
        allProducts = JSON.parse(localStorage.getItem("ProductsInCart"))
        renderProductsinCart()
    } else {
        renderProductsinCart()
    }
}
readProducts()


clearCart.addEventListener('click', () => {
    allProducts = []
    localStorage.removeItem("ProductsInCart")
    renderProductsinCart()
})
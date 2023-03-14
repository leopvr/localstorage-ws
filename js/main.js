let cardContainer = document.getElementById("cardContainer");
// console.log(cardContainer);

let cardsProductos = "";

// function getProducts(data) {
    for (producto of data) {
        cardsProductos += `
    
        <div class="container-card card m-3" style="width: 18rem">
            <div class="container-card-img">
                <img src="${producto.image}" class="card-img-top object-fit " alt="${producto.title}"  />
            </div>
            <div class="card-body d-flex flex-column justify-content-end">
                <h5 class="card-title h-100">${producto.title}</h5>
                <div class=" d-flex justify-content-around">
                <h6 class="card-price">$${producto.price}</h6>
                <h6>⭐${producto.rating.rate}</h6>
                </div>
                <a href="./pages/details.html?id=${producto.id}" class="btn btn-warning"
                    >View Detais</a
                >
                <button class="btn mt-2 addToCart" style="background-color: #013481; border-color: #143565; color: white">Add to cart!</button>
            </div>
        </div>
    `
        cardContainer.innerHTML = cardsProductos;
        // console.log(producto)
    }
// }


// console.log(document.location.search)

const queryString = location.search

// console.log(URLSearchParams.prototype)
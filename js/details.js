


console.log(document.location.search)
const queryString = location.search

console.log([new URLSearchParams])

let parametros = new URLSearchParams(queryString)
console.log(parametros)

// console.log(parametros.get("algo"))
let idExtraidoDelUrl = parametros.get("id")

console.log( data.find(producto => producto.id == idExtraidoDelUrl))
const productoDetail = data.find(producto => producto.id == idExtraidoDelUrl)
console.log(productoDetail)

const contenedorCardDetail = document.getElementById("contenedorCardDetail")
console.log(contenedorCardDetail)
contenedorCardDetail.innerHTML =`
<div class="card mb-3 p-4" style="max-width: 840px">
    <div class="row g-0">
        <div class="col-md-4">
            <img
                src="${productoDetail.image}"
                class="img-fluid rounded-start"
                alt="${productoDetail.image}"
            />
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${productoDetail.title}</h5>
                <p class="card-text">
                    ${productoDetail.description}
                </p>
                <p class="card-text">
                    <small class="text-muted"
                        >${productoDetail.category}</small
                    >
                </p>
                <div
                    class="card-body d-flex flex-column justify-content-end"
                >
                    <h6 class="card-title h-100">
                        stock: ${productoDetail.rating.count}
                    </h6>
                    <div
                        class="d-flex justify-content-around"
                    >
                        <h6>$${productoDetail.price}</h6>
                        <h6>⭐${productoDetail.rating.rate} Rate</h6>
                    </div>
                    <a
                        class="btn btn-primary"
                        id="btnAdd"
                        >Add to cart</a
                    >
                    <a href="../index.html">Ir al inicio</a>
                </div>
            </div>
        </div>
    </div>
    </div>
`

const btnAdd = document.getElementById("btnAdd")

btnAdd.addEventListener("click", () => alert("Site under construction :("))
// console.log(btnAdd)
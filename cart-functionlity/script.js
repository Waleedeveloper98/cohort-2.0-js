let realProducts = [
    {
        name: "Cotton T-Shirt",
        image: "https://images.unsplash.com/photo-1759572095329-1dcf9522762b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "Soft cotton casual wear",
        price: "450 PKR"
    },
    {
        name: "Stainless Steel Water Bottle",
        image: "https://images.unsplash.com/photo-1544003484-3cd181d17917?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "Leak-proof • 750ml",
        price: "600 PKR"
    },
    {
        name: "Notebook (100 Pages)",
        image: "https://images.unsplash.com/photo-1620287920810-3f5b9746380c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "Smooth paper • School & office use",
        price: "120 PKR"
    },
    {
        name: "Wireless Mouse",
        image: "https://images.unsplash.com/photo-1739742473235-34a7bd9b8f87?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "Ergonomic • 2.4GHz",
        price: "750 PKR"
    },
    {
        name: "Ceramic Coffee Mug",
        image: "https://plus.unsplash.com/premium_photo-1719289799337-9cb436447965?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "Durable • Heat resistant",
        price: "250 PKR"
    }
];

let popularProducts = [
    {
        name: "Bluetooth Earbuds",
        image: "https://images.unsplash.com/photo-1655560378428-7605bda51749?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "Clear sound • 6 hours battery",
        price: "1200 PKR"
    },
    {
        name: "Portable Power Bank 10,000mAh",
        image: "https://images.unsplash.com/photo-1566554738544-d962991c3fee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "Fast charging • Lightweight",
        price: "1500 PKR"
    },
    {
        name: "Face Wash",
        image: "https://images.unsplash.com/photo-1653919198052-546d44e2458e?q=80&w=714&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "Fresh & oil control",
        price: "350 PKR"
    },
    {
        name: "Hand Wash Refill 500ml",
        image: "https://c8.alamy.com/comp/P9D88R/antibacterial-hand-wash-gel-ads-dispenser-bottle-mockup-isolated-3d-realistic-soap-antiseptic-bottle-hygiene-product-package-design-vector-illustration-P9D88R.jpg",
        headline: "Antibacterial protection",
        price: "180 PKR"
    },
    {
        name: "LED Desk Lamp",
        image: "https://plus.unsplash.com/premium_photo-1672166939591-b2547bd18fca?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        headline: "Adjustable • Low power",
        price: "900 PKR"
    }
];

let cart = []

let realProductsContainer = document.querySelector(".products")
let popularProductsContainer = document.querySelector(".populars")
let cartContainer = document.querySelector(".cartexpnd")
let cartIcon = document.querySelector(".carticon")


function showRealProducts() {
    let clutter = "";
    realProducts.forEach((product, index) => {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] overflow-hidden bg-zinc-200 rounded-xl">
                <img class="w-full h-full object-cover" src=${product.image}/>
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-medium opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">${product.price}</h4>
                        </div>
                        <button data-index=${index} class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index=${index}
                                class="ri-add-line add"></i></button>
                    </div>
                </div>
            </div>`
    })
    realProductsContainer.innerHTML = clutter;
}

function showPopularProducts() {
    let clutter = "";
    popularProducts.forEach(((product) => {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src=${product.image}
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
                    </div>
                </div>`
    }))

    popularProductsContainer.innerHTML = clutter
}

function addToCart() {
    realProductsContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("add")) {
            cart.push(realProducts[e.target.dataset.index])
        }
    })
}


function showCart() {
    let flag = 0;
    cartIcon.addEventListener("click", function () {
        if (flag === 0) {
            cartContainer.style.display = "block"
            flag = 1;
            let clutter = "";
            cart.forEach(function (product, index) {
                clutter += `<div id=${index} class="flex gap-2 bg-white p-2 rounded-lg">
                <div class="w-10 h-10 flex-shrink-0 rounded-lg bg-red-500">
                <img class="w-full h-full object-cover" src=${product.image}/>
                </div>
                <div>
                <h3 class="font-semibold">${product.name}</h3>
                <h5 class="text-sm font-semibold opacity-80">${product.price}</h5>`
            })
            cartContainer.innerHTML = clutter
        } else {
            cartContainer.style.display = "none"
            flag = 0;
        }
    })
}
showCart()
addToCart()
showPopularProducts()
showRealProducts()
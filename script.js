const productContainer = document.getElementById("productContainer");
for (const product of products) {
  const productDiv = document.createElement("div");
  productDiv.innerHTML = `
  <div class="relative flex w-full h-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div
                        class="relative mx-4 -mt-6 h-52 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                        <img src="${product.image}"
                            alt="img-blur-shadow" layout="fill" class="h-full w-full" />
                    </div>
                    <div class="p-6">
                        <h5
                            class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            ${product.name}
                        </h5>
                        
                        <div>
                            <span><del>399</del>TK.</span>
                            <span class="ml-3">299TK.</span>
                        </div>
                        <div class="rating">rating - ${product.rating}</div>
                    </div>
                    <div class="p-6 pt-0">
                        <button
                    
                        onclick = "addToCart(${product.id})"
                            class="select-none rounded-lg bg-gradient-to-r to-emerald-600 from-sky-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button" data-ripple-light="true">
                            Add to cart
                        </button>
                    </div>
                </div>`;
  productContainer.appendChild(productDiv);
}

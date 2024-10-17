const articleGrid = document.getElementById("article_grid");
function getArticleDatas() {
    fetch("js/article-datas.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) {
            postArticles(datas);
        })
        .catch(error => console.error('Error fetching datas:', error));
}
/*
                <div class="bg-white shadow rounded overflow-hidden group">
                    <div class="relative" id="putProdImageHere-">
                        <img src="{{ asset('images/products/product1.jpg') }}" alt="product 1" class="w-full">
                    </div>
                    <div class="pt-4 pb-3 px-4" id="addNameAndHrefHere">
                        <a href="#">
                            <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">Guyer
                                Chair</h4>
                        </a>
                        <div class="flex items-baseline mb-1 space-x-2" id="addPricesHere">
                            <p class="text-xl text-primary font-semibold">$45.00</p>
                            <p class="text-sm text-gray-400 line-through">$55.90</p>
                        </div>
                        <div class="flex items-center">
                            <div class="text-xs text-gray-500 ml-3">Restant : <span id="useLocalStorageToTrackThis">(150)</span></div>
                        </div>
                    </div>
                    <div id="addBasketTrackingToLocalStorage">
                    <a href="#"
                       class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add
                        to cart</a>
                    </div>
                </div>
 */

function postArticles(datas) {
    console.log(datas);
    const   putProdImageHere = document.getElementById("putProdImageHere"),
            addNameAndHrefHere = document.getElementById("addNameAndHrefHere"),
            addPricesHere = document.getElementById("addPricesHere"),
            useLocalStorageToTrackThis = document.getElementById("useLocalStorageToTrackThis"),
            addBasketTrackingToLocalStorage = document.getElementById("addBasketTrackingToLocalStorage");

    datas.forEach((data) => {
        const divExt = document.createElement("div");
        divExt.classList.add("bg-white", "shadow", "rounded", "overflow-hidden", "group",)
        const divImg = document.createElement("div");
        divImg.classList.add("relative");
        const img = document.createElement("img");
        img.setAttribute("src", data["img"]);
        img.setAttribute("alt", data["item"]);
        divImg.appendChild(img);
        divExt.appendChild(divImg);
        const divLink = document.createElement("div");
        divLink.classList.add("pt-4", "pb-3", "px-4",)
        const link = document.createElement("a");
        link.innerHTML = `<h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition"> ${data["item"]}</h4>`
        divLink.appendChild(link);
        const divPrice = document.createElement("div");
        divPrice.classList.add("flex", "items-baseline", "mb-1", "space-x-2")
        const p1 = document.createElement("p");
        p1.classList.add("text-xl", "text-primary", "font-semibold")
        p1.textContent = "€ "+data["priceRed"];
        const p2 = document.createElement("p");
        p2.classList.add("text-sm", "text-gray-400", "line-through");
        p2.textContent = "€ "+data["price"];
        divPrice.appendChild(p1);
        divPrice.appendChild(p2);
        divLink.appendChild(divPrice);
        const divLeft = document.createElement("div");
        divLeft.classList.add("flex", "items-center");
        divLeft.innerHTML = `<div class="text-xs text-gray-500 ml-3">Restant : <span id="useLocalStorageToTrackThis">(150)</span></div>`;
        divLink.appendChild(divLeft);
        const divBtn = document.createElement("div");
        divBtn.innerHTML = `<a href="#" class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add to cart</a>`
        divLink.appendChild(divBtn);

        divExt.appendChild(divLink);
        articleGrid.appendChild(divExt);
    });
    /*
     const divExt = document.createElement("div");
     divExt.classList.add("relative",
                          "rounded-sm" ,
                          "overflow-hidden" ,
                          "group");

         let img = document.createElement("img");
         img.setAttribute("src", data["img"]);
         img.setAttribute("alt", data["cat"]);
         img.classList.add("w-full");

         let href = document.createElement("a");
         href.setAttribute("href", data["href"]);
         href.classList.add("absolute",
                             "inset-0",
                             "bg-black",
                             "bg-opacity-40",
                             "flex",
                             "items-center",
                             "justify-center",
                             "text-xl",
                             "text-white",
                             "font-roboto",
                             "font-medium",
                             "group-hover:bg-opacity-60",
                             "transition");
         href.textContent = data["cat"];

         divExt.appendChild(img);
         divExt.appendChild(href);

     category_grid.appendChild(divExt);
     */

}

getArticleDatas();

/*
<div class="relative rounded-sm overflow-hidden group">
    <img src="{{ asset('images/category/category-1.jpg') }}" alt="category 1" class="w-full">
    <a href="#"
       class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Bedroom</a>
</div>

 */
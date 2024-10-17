const articleGrid = document.getElementById("article_grid");
const recommendedGrid = document.getElementById("recommended_grid");
function getArticleDatas(whichGrid) {
    fetch("js/article-datas.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) {
            postArticles(datas, whichGrid);
        })
        .catch(error => console.error('Error fetching datas:', error));
}


function postArticles(datas, whichGrid) {
    const shuffledData = datas.sort((a, b) => 0.5 - Math.random());
    const cutData = shuffledData.slice(0,4);

    cutData.forEach((data) => {
        const soldAmt = JSON.parse(localStorage.getItem('ITEM'+data["id"])).sold;
        const newAmt = parseInt(data["amount"]) - parseInt(soldAmt);
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
            divLeft.innerHTML = `<div class="text-xs text-gray-500 ml-3">Remaining : <span id="useLocalStorageToTrackThis">${newAmt}</span></div>`;
            divLink.appendChild(divLeft);
            const divBtn = document.createElement("div");
            divBtn.innerHTML = `<button 
                                   class="block w-full py-1 text-center text-white 
                                          bg-primary border border-primary rounded-b 
                                          hover:bg-transparent hover:text-primary transition"
                                   id="ITEM${data['id']}"
                                   onclick="addToBasket('ITEM${data["id"]}')">
                                   Add to cart
                                   </button>`
            divLink.appendChild(divBtn);

        divExt.appendChild(divLink);
            whichGrid.appendChild(divExt);

    });

}

getArticleDatas(articleGrid);
getArticleDatas(recommendedGrid);


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


function postArticles(datas) {
    console.log(datas);
   /*
    datas.forEach((data) => {
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
    }); */

}

getArticleDatas();

/*
<div class="relative rounded-sm overflow-hidden group">
    <img src="{{ asset('images/category/category-1.jpg') }}" alt="category 1" class="w-full">
    <a href="#"
       class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Bedroom</a>
</div>

 */
 // console.log("dataFetch connected"); // This works
const category_grid = document.getElementById("category_grid");
function getDatas() {
    fetch("js/dummy-datas.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) {
            //       console.log('Fetched data:', datas); // Check if data is fetched correctly
            postDatas(datas);
        })
        .catch(error => console.error('Error fetching datas:', error));
}


function postDatas(datas) {
    datas.forEach((data) => {
    const divExt = document.createElement("div");
    divExt.classList.add("relative");
    divExt.classList.add("rounded-sm");
    divExt.classList.add("overflow-hidden");
    divExt.classList.add("group");
        let img = document.createElement("img");
        img.setAttribute("src", data["img"]);
        img.setAttribute("alt", data["cat"]);
        img.classList.add("w-full");

        let href = document.createElement("a");
        href.setAttribute("href", data["href"]);
        href.classList.add("absolute");
        href.classList.add("inset-0");
        href.classList.add("bg-black");
        href.classList.add("bg-opacity-40");
        href.classList.add("flex");
        href.classList.add("items-center");
        href.classList.add("justify-center");
        href.classList.add("text-xl");
        href.classList.add("text-white");
        href.classList.add("font-roboto");
        href.classList.add("font-medium");
        href.classList.add("group-hover:bg-opacity-60");
        href.classList.add("transition");
        href.textContent = data["cat"];

        divExt.appendChild(img);
        divExt.appendChild(href);

   //     console.log(divExt);
    category_grid.appendChild(divExt);
    })
// console.log(datas); // this works, too

}


getDatas();

/*
<div class="relative rounded-sm overflow-hidden group">
    <img src="{{ asset('images/category/category-1.jpg') }}" alt="category 1" class="w-full">
    <a href="#"
       class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Bedroom</a>
</div>

 */
 // console.log("dataFetch connected"); // This works

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

// console.log(datas); // this works, too
}


getDatas();


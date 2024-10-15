 console.log("dataFetch connected"); // This works

function getDatas() {
    fetch("scripts/dummy-datas.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(datas) {
            postDatas(datas);
        })
        .catch(error => console.error('Error fetching datas:', error));
}


const refresh = () => {
    const url = 'https://cors-anywhere.herokuapp.com/https://api.tfgm.com/odata/Metrolinks?$top=10';
    const fetchData = {
        headers: {
            'Ocp-Apim-Subscription-Key': '1f25671ac2ac42a79d3f48ba4c593567'
        },
        method: 'GET'
    }
    let update = document.getElementById('shit').innerHTML
    fetch(url, fetchData)
        .then(response => response.json())
        .then(data => {
            for(i in data) {
                status = data.value[i].Id;
                update += status;
            }
        }
    );
}

//document.getElementById('button').addEventListener('submit', refresh);
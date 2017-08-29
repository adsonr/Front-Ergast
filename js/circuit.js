
fetch('http://ergast.com/api/f1/circuits.json', {
    method: "GET"
})
    .then(
    function (response) {
        if (response.status != 200) {
            console.log('Ocorreu um erro. Status Code: ' + response.status);
            return;
        }
        response.json().then(function (data) {
            var circuits = data['MRData']['CircuitTable']['Circuits'];

            circuits.forEach(function (element) {
                var circuitEl = document.createElement('li');
                circuitEl.innerHTML = '<b>' + element.circuitName + ' ' + element.Location.country + '</b>';
                document.getElementById('circuit-list').appendChild(circuitEl);
            })
        })
    })

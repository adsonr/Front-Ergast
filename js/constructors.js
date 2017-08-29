fetch('http://ergast.com/api/f1/constructors.json', {
    method: "GET"
})
    .then(
    function (response) {
        if (response.status != 200) {
            console.log('Ocorreu um erro. Status Code: ' + response.status);
            return;
        }
        // resposta
        response.json().then(function (data) {
            var constructors = data['MRData']['ConstructorTable']['Constructors'];

            constructors.forEach(function (element) {
                var constructorEl = document.createElement('li');
                constructorEl.innerHTML = '<b>' + element.name + ' ' + element.nationality + '</b>';
                document.getElementById('constructor-list').appendChild(constructorEl);
            })
        })
    }
    )
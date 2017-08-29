fetch('http://ergast.com/api/f1/drivers.json', {
    method: "GET"
})
    .then(
    function (response) {
        if (response.status !== 200) {
            console.log('Ocorreu um erro. Status Code: ' + response.status);
            return;
        }

        // resposta 
        response.json().then(function (data) {
            var drivers = data['MRData']['DriverTable']['Drivers'];

            drivers.forEach(function (element) {
                var driverEl = document.createElement('li');
                driverEl.innerHTML = '<b>' + element.givenName + ' ' + element.familyName + ' ' +
                    element.dateOfBirth + ' ' + element.nationality + '</b>: ' + `<a href="${element.url}">${element.url}</a>`
                    document.getElementById('drivers-list').appendChild(driverEl);
            });
        });
    }
    )
    .catch(function (err) {
        console.log('Fetch Error: ', err);
    });
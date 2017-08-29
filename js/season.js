fetch('http://ergast.com/api/f1/seasons.json', {
    method: 'GET'
})
    .then(
    function (response) {
        if (response.status !== 200) {
            console.log('Ocorreu um erro. Status Code: ' + response.status);
            return;
        }

        // resposta 
        response.json().then(function (data) {
            var seasons = data.MRData.SeasonTable.Seasons;
            seasons.forEach(function (element) {
                var seasonEl = document.createElement('li');
                seasonEl.innerHTML = `${element.season} <a href="${element.url}">${element.url}</a>`;
                document.getElementById('season-list').appendChild(seasonEl);
            });
        });
    }
    )
    .catch(function (err) {
        console.log('Fetch Error: ', err);
    });
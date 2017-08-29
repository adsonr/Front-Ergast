fetch('http://ergast.com/api/f1/2008/5/qualifying.json', {
    method: 'GET'
})

    .then(function (response) {
        if(response.status != 200) {
            console.log('Ocorreu um erro. Status Code: ' + response.status);
            return;
        }
        response.json().then(function(data){
            var qualifys = data['MRData']['RaceTable']['Races'][0]['QualifyingResults'];
            console.log(qualifys);
            qualifys.forEach(function(element) {
             var qualifysEl = document.createElement('li');
             qualifysEl.innerHTML = `${element.season} ${element.round}`;
             document.getElementById('qualifying-list').appendChild(qualifysEl);
            });
        })
    })
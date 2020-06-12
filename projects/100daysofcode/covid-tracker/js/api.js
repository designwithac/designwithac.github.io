const totalCases = document.getElementById('total__cases');
const recoveredCases = document.getElementById('recovered__cases');
const activeCases = document.getElementById('active__cases');
const deathsCases = document.getElementById('death__cases');

function displayTotalCases(data){
    totalCases.textContent = formatOutputNumber(data.cases);
    recoveredCases.textContent = formatOutputNumber(data.recovered);
    deathsCases.textContent = formatOutputNumber(data.deaths);
    activeCases.textContent = formatOutputNumber(data.active);

    document.getElementById('new-case').textContent = formatOutputNumber(data.todayCases) + " (Today)";
    document.getElementById('new-recovered').textContent = formatOutputNumber(data.todayRecovered) + " (Today)";
    document.getElementById('new-death').textContent = formatOutputNumber(data.todayDeaths) + " (Today)";
}

function formatOutputNumber(num){
    let n = Number(num);
    return n.toLocaleString('en');
}

//get api data for all country
function getStatsWorldwide(){
    fetch('https://data.nepalcorona.info/api/v1/world', {
        "method": "GET",
        "header": {
            "Content-Type": "application/json"
        }
    }).then(result => {
        return result.json();
    }).then(data => {
        console.log(data);
        displayTotalCases(data);
    }).catch(error => {
        console.log("error message is " + error);
    })
}
getStatsWorldwide();

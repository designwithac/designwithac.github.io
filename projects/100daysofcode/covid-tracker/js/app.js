// select all the elements
const country_name_element = document.querySelector('.country .name');
const total_cases_element = document.querySelector('.total-cases .value');
const new_cases_element = document.querySelector('.total-cases .new-value');
const recovered_element = document.querySelector('.recovered .value');
const new_recovered_element = document.querySelector('.recovered .new-value');
const deaths_element = document.querySelector('.deaths .value');
const new_deaths_element = document.querySelector('.deaths .new-value');
const ctx = document.getElementById("axes_line_chart").getContext('2d');

//app variables
let app_data = [],
    cases_list = [],
    recovered_list = [],
    deaths_list = [],
    dates = [];

let country_name, total_case, recovered_case, deaths_case, new_cases, new_recovered, new_death;

//get user country code
let country_code = geoplugin_countryCode();
let user_country;

country_list.forEach( country => {
    if(country.code === country_code){
        user_country = country.name;
    }
});

// console.log(user_country);

function fetchData(user_country){
    fetch(`https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=${user_country}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "87c0bd74acmsh1ba332c7f8b92bbp1b2ff4jsn2bec3fe760ba"
	}
    })
    .then(response => {
        //json object retrun garchha
        //then code below will be executed
        return response.json();
    })
    .then(data => {
        dates = data.latest_stat_by_country;

        dates.forEach(stat => {
            console.log(stat.new_deaths);
            total_case = stat.total_cases;
            recovered_case = stat.total_recovered;
            deaths_case = stat.total_deaths;
            new_cases = stat.new_cases;
            new_death = stat.new_deaths;
            country_name = stat.country_name;
        });
    })
    .then(() => {
        updateUI();
    })
    .catch(err => {
        console.log(err);
    });

}

fetchData(user_country);

function updateUI(){
    updateStats();
}

function updateStats(){
    country_name_element.innerHTML = country_name;
    total_cases_element.innerHTML = total_case;
    new_cases_element.innerHTML = new_cases;
    recovered_element.innerHTML = recovered_case;
    deaths_element.textContent = deaths_case;
    new_deaths_element.textContent = new_death;
}
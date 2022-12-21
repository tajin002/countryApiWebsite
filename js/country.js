const loadCountry=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}


const displayCountry=(countries)=>{
    countries.forEach(country => {
        // console.log(country);
        const countrySection = document.getElementById('container')
        const countryDiv = document.createElement('div');
        countryDiv.innerHTML = `
       
        <div class="bg-blue-100 h-72 shadow-xl">
            <div class = 'flex'>
                <div class = 'mt-8 ml-5'><img src="${country.flags.png}" alt="Shoes" /></div>
                <div class = 'ml-10'>
                    <h2 class="text-2xl font-bold mt-5">${country.name.common}</h2>
                    <p class="text-normal font-semi-bold mt-2"><span class = 'font-semibold'>Capital</span> : ${country ? country.capital : 'No capital'}</p>
                    <p class="text-normal font-semi-bold mt-2"><span class = 'font-semibold'>Population</span> : ${country.population}</p>
                    <p class="text-normal font-semi-bold mt-2"><span class = 'font-semibold'>Continents</span> : ${country.continents}</p>
                    <label onclick = "loadCountryDetails('${country.cca2}')" class="btn rounded mt-4 w-24" for="my-modal-3">Details</label>
                </div>
            </div>
      </div>
        `;
        countrySection.appendChild(countryDiv);
    });
}

 //load country all details
 const loadCountryDetails = code => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(res => res.json())
    .then(data => displayAllDetails(data[0]))
 }

 const displayAllDetails = country =>{
    console.log(country);
        const modalDetails = document.getElementById('details');
        // const detailsDiv = document.createElement('p')
        modalDetails.innerHTML = `
            <p class='text-2xl text-center font-bold'>${country.name.common}</p>
            <p class="text-normal font-semi-bold mt-2"><span class = 'font-semibold'>Capital</span> : ${country ? country.capital : 'No capital'}</p>
            <p class="text-normal font-semi-bold mt-2"><span class = 'font-semibold'>Population</span> : ${country.population}</p>
            <p class="text-normal font-semi-bold mt-2"><span class = 'font-semibold'>Continents</span> : ${country.continents}</p>
            <p class="text-normal font-semi-bold mt-2"><span class = 'font-semibold'>Independent</span> : ${country.independent}</p>
            <p class="text-normal font-semi-bold mt-2"><span class = 'font-semibold'>Subregion</span> : ${country.subregion}</p>
            
            <p class="text-normal font-semi-bold mt-2"><span class = 'font-semibold'>Timezones</span> : ${country ? country.timezones[0]:'No timezone set'}</p>
        
        `;
 }

loadCountry()
// loadCountryDetails()


// <p class="text-normal font-semi-bold mt-2"><span class = 'font-semibold'>Currencies</span> : ${country.currencies}</p>
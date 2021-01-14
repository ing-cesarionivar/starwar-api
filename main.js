const results = document.querySelector('#results');
const inputs = document.querySelectorAll('input[type="radio"]');

async function asyncFetch(value) {
    const res = await fetch(`https://swapi.dev/api/${value}/`);
    const data = await res.json();
    displayResults(data, value);
}


function displayResults(data, value) {

    let output = '';
    console.log(data);
    if(value === 'films') {
        data.results.forEach(item => {
            output += `
                <div class="card p-3 m-3" style="opacity:.8">
                    <h4 class="card-title text-center">${item.title}</h4>
                    <div class="card-content">
                        <span style="text-decoration:underline">Producer:</span> ${item.producer} <br>
                        <span style="text-decoration:underline">Director:</span> ${item.director} <br>
                        <span style="text-decoration:underline">Release date:</span> ${item.release_date} <br>
                        <p class="text-center">${item.opening_crawl}</p>
                    </div>
                </div>
            `;
        });

        results.innerHTML = output;
    }

    if(value === 'people') {
        data.results.forEach(item => {
            output += `
                <div class="card p-3 m-3" style="opacity:.8">
                    <h4 class="card-title text-center">${item.name}</h4>
                    <div class="card-content">
                        <span style="text-decoration:underline">Gender:</span> ${item.gender} <br>
                        <span style="text-decoration:underline">Height:</span> ${item.height} <br>
                        <span style="text-decoration:underline">Movies:</span> ${item.films.length} <br>
                        <span style="text-decoration:underline">Vehicles:</span> ${item.vehicles.length} <br>
                    </div>
                </div>
            `;
        });

        results.innerHTML = output;
    }

    if(value === 'vehicles') {
        data.results.forEach(item => {
            output += `
                <div class="card p-3 m-3" style="opacity:.8">
                    <h4 class="card-title text-center">${item.name}</h4>
                    <div class="card-content">
                        <span style="text-decoration:underline">Model:</span> ${item.model} <br>
                        <span style="text-decoration:underline">Manufacturer:</span> ${item.manufacturer} <br>
                        <span style="text-decoration:underline">Passengers:</span> ${item.passengers} <br>
                        <p class="text-center">${item.vehicle_class}</p>
                    </div>
                </div>
            `;
        });

        results.innerHTML = output;
    }


}

// Event listener for buttons
inputs.forEach(e => {
    e.addEventListener('click', e => {
        asyncFetch(e.target.value);

    });
}); 

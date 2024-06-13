console.log('hello main');

async function getData (location, apiKey) {
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?q=${location}&key=${apiKey}`);
    const result = await data.json();
  
    const city = result.location.name;
    //console.log(city);

    const containerResult = document.getElementById('data-container')
    containerResult.innerHTML = `
    <p>The 6ix is known as ${city} sway</p>
    `
}

getData('Toronto', "59a915c9f6154b7e88e212909240606");
console.log('hello main');

async function getData (apiKey) {
    const data = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
    const result = await data.json();
  
    const calendar = result.date;
    const image = result.hdurl;
    const expl = result.explanation;
    //console.log(city);

    const containerResult = document.getElementById('data-container')
    containerResult.innerHTML = `
    
    <img src="${image}"> </img>

    <p>This image was captured on ${calendar}</p>

    <h3> What are on NASA's thoughs? </h3>

    <p> ${expl} </p>
    `
}

getData("WTbkPb7oLaWkieOEWDJjBy9gMdvjB74rMawzHR2C");


document.body.innerHTML = `<section>
<div class = "heading">ISRO-CENTRES</div>
<div class="container"></div>
</section>`


async function getAllData(){
    const data = await fetch(
        "https://isro.vercel.app/api/centres",
        {method: "GET"}
    );
    // console.log(data);
    
    const isroCentres = await data.json();
    
    const isroContainer = document.querySelector(".container");

    isroCentres.centres.forEach((isroCentre)=>{
        isroContainer.innerHTML += `<div class= "grid-container">
        <div class = "isro-container">
        <div class = "details">
        <p class = "cen">Centres</p>
        <p class = "name">Name:  ${isroCentre.name}</p>
        <p class = "place">Place:  ${isroCentre.Place}</p>
        <p class = "state">State:  ${isroCentre.State}</p>
        </div>
        </div> 
        </div>  
        `;
    });
}
getAllData();

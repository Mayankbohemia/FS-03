
const main = document.querySelector('.main')

id = localStorage.getItem('id')
console.log(id);


fetch(
 `
 https://api.themoviedb.org/3/movie/${id}?api_key=f7c97cae63de4e2d15e90d85381e6138&language=en-US`
).then(data=>data.json()).then(data=>{
    console.log(data);
    render(data)
})

function render(data) {
let imagePath = `https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`;
const html = `
<img class="imagee" src="${imagePath}" alt="">
<div class="details">
<div>
    <h1>${data.title}</h1>
    <h5 class='gray'>${data.release_date
    }</h5>
    </div>
    
    <div>
    ${data.vote_average} <img class="star" src="star.png" alt=""> 
    </div>
    <div>
     <h2>Overview</h2> <br>
    <h3>${data.overview}</h3>
    </div>
    <h3 class='gray scale'>Country of Origin:<span>${data.production_countries[0].name}</span> </h3>
    

    
   
    

    
</div>
`
main.insertAdjacentHTML('beforeend', html)


}
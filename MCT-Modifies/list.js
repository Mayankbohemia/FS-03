const flex = document.querySelector(".flex");


const flex1 = document.querySelector(".flex1");
const flex3 = document.querySelector(".flex3");
const point = document.querySelectorAll('.point')

const searchInput = document.querySelector(".search__bar");
const color = document.querySelector('.color')


fetch(
  "https://api.themoviedb.org/3/trending/movie/day?api_key=f7c97cae63de4e2d15e90d85381e6138"
)
  .then((data) => data.json())
  .then((data) => {
    const finalData = data.results;
    
    for (let i = 3; i < 6; i++) {
      weeklyMovies(finalData[i]);
    }
    for (let i = 8; i < 9; i++) {
      weeklyMovies(finalData[i]);
    }
    for (let i = 7; i < 11; i++) {
      vintageMovies(finalData[i]);
    }
    renderMovies(finalData);
  });

function renderMovies(data) {
  searchInput.addEventListener("keyup", function () {
    let html1 = "";

    copyData = [...data];

    let inputValue = searchInput.value;
    
    let newData;
    copyData = copyData.filter((data1) => {
      let flag = false;
      if (copyData.name) {
        newData = data1.name;
      } else {
        newData = data1.title;
      }

      for (let i = 0; i < data1.title.length; i++) {
        

        if (data1.title.toLowerCase().includes(inputValue.toLowerCase())) {
          flag = true;
          break;
        }
      }
      return flag;
    });

    if (copyData.length > 0) {
      for (let i = 0; i < copyData.length; i++) {
        let imagePath = `https://www.themoviedb.org/t/p/w220_and_h330_face${copyData[i].poster_path}`;

        html1 += `
      <div class="movies__grid">
            
            <img class="img" src="${imagePath}">
             
            <h4 id="${copyData[i].id} class="transfer"> <a id='${copyData[i].id}' href="details.html"> <li  id='${copyData[i].id}'class="btn" > ${copyData[i].title}</li></a> </h4>

            <img class="star " src="star.png" alt=""> <span class='gap'>${copyData[i].vote_average}</span>          
    
    
        </div>

      `;
      }
      flex3.innerHTML = html1;
      let localStr;
  flex3.addEventListener('click', function(e){
    console.log(e.target.id);
    localStr = e.target.id
    setlocal()
  
  
  })
  function setlocal(){
    localStorage.setItem("id", localStr);

  }
  setlocal()
    }
    console.log(searchInput.value.length);
    if (searchInput.value.length === 0) {
      flex3.innerHTML = "";
    }
  });
}
flex.innerHTML = "";
function weeklyMovies(data) {
  

  let movieName;

  let imagePath = `https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`;

  if (data.name) {
    movieName = data.name;
  } else {
    movieName = data.original_title;
  }

  
 const html = `
<div id='${data.id}' class="movies__grid" >
        
<img id='${data.id}' class="img" src="${imagePath}">
<a id= href="details.html"></a>

 <h4 id="${data.id} class="transfer"> <a id='${data.id}' href="details.html"> <li  id='${data.id}'class="btn" > ${movieName}</li></a> </h4>
 
 
 


<img class="star" src="star.png" alt=""> <span class='gap'>${data.vote_average}</span>



</div>
`;
  flex.insertAdjacentHTML("beforeend", html);
let localStr;
  flex.addEventListener('click', function(e){
    console.log(e.target.id);
    localStr = e.target.id
    setlocal()
  
  
  })
  function setlocal(){
    localStorage.setItem("id", localStr);

  }
  setlocal()
  
}

function vintageMovies(data) {
  let movieName;

  let imagePath = `https://www.themoviedb.org/t/p/w220_and_h330_face${data.poster_path}`;

  if (data.name) {
    movieName = data.name;
  } else {
    movieName = data.original_title;
  }

  const html = `
<div class="movies__grid">
        
<img class="img" src="${imagePath}">


<h4 id="${data.id} class="transfer"> <a id='${data.id}' href="details.html"> <li  id='${data.id}'class="btn" > ${movieName}</li></a> </h4>
<img class="star" src="star.png" alt=""> <span class='gap'>${data.vote_average}</span>



</div>
`;
  flex1.insertAdjacentHTML("beforeend", html);
  let localStr;
  flex1.addEventListener('click', function(e){
    console.log(e.target.id);
    localStr = e.target.id
    setlocal()
  
  
  })
  function setlocal(){
    localStorage.setItem("id", localStr);

  }
  setlocal()
}

point.forEach(ele=>{
  

  ele.addEventListener('click', function(e){
    
    e.target.classList.add('.color')
   
   
  })
 
})



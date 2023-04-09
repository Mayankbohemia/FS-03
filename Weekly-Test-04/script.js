
const list = document.querySelectorAll('.gap')
const insert = document.querySelector('.content')
const userInfo = document.querySelector('.userinfo')

 fetch(' https://fakestoreapi.com/products/14').then(res=>res.json()).then(data=> initialLoader(data))
 function initialLoader(data) {
    const html = `
    <div class="image">
       <img src="${data.image}" alt="Image Loading">

      </div>

      <div class="main__content">
        <div class="category">
          <h2 class="heading">${data.category} Category</h2>
        </div>
        <div class="title">
            <h2>Title</h2>
            <h3>${data.title}</h3>
        </div>
        <div class="price">
            <h2>Price</h2>
            <h3>
              $ ${data.price}
            </h3>
        </div>
        <div class="description">
            <h2>Description</h2>
            <h3>
               ${data.description}
            </h3>
        </div>
        <div class="rating">
            <h2>Rating</h2>
            <h3>
               ${data.rating.rate}
            </h3>
        </div>
      </div>`
  insert.insertAdjacentHTML('beforeend', html)
}

list.forEach(mov=>{
    mov.addEventListener('click', function(e){
        // mov.style.color = 'brown'
        console.log(e.target.value);
        fetch(` https://fakestoreapi.com/products/${e.target.value}`).then(res=>res.json()).then(data=> 
        fetchData(data)        


        )

    })
    


    const fetchData = function(data) {
        insert.innerHTML = ''
        
        console.log(data);
        // console.log(data.title);
        const html = `
        <div class="image">
           <img src="${data.image}" alt="Image Loading">

          </div>

          <div class="main__content">
            <div class="category">
              <h2 class="heading">${data.category} Category</h2>
            </div>
            <div class="title">
                <h2>Title</h2>
                <h3>${data.title}</h3>
            </div>
            <div class="price">
                <h2>Price</h2>
                <h3>
                  $ ${data.price}
                </h3>
            </div>
            <div class="description">
                <h2>Description</h2>
                <h3>
                   ${data.description}
                </h3>
            </div>
            <div class="rating">
                <h2>Rating</h2>
                <h3>
                   ${data.rating.rate}
                </h3>
            </div>
          </div>`
      insert.insertAdjacentHTML('beforeend', html)
    }
   
})

fetch(' https://randomuser.me/api/?results=1').then(res=>res.json()).then(data=> usersData(data))

function usersData(data) {
  // console.log(data.results);
  console.log(data.results[0]);

  const dob = data.results[0].dob.date
  const date = new Date(dob)
  console.log(date);
  console.log(date.getFullYear());
  
  const html = ` <div class="infobox">
  <img class="userimage" src=" ${data.results[0].picture.large}" alt="" />
  <div class="details">
    <div class="name"> <h2>${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</h2></div>
    <div class="email">${data.results[0].email}</div>          
    <div class="birth">${date.getDate()}/${date.getMonth()}/${date.getFullYear()} (${data.results[0].dob.age} years old)</div>
    <div class="number">${data.results[0].cell}</div>
    <div class="country"> ${data.results[0].location.country}</div>
  </div>
</div>`
userInfo.insertAdjacentHTML('beforeend', html)
}


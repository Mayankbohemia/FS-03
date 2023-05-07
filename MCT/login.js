const anchor = document.querySelector(".anchorNew");
const form = document.querySelector(".form");
const loginForm = document.querySelector(".loginForm");
console.log(loginForm);

const namee = document.querySelector("#name");
const age = document.querySelector("#age");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const details = document.querySelector(".details");

let nameFlag = false;
let ageFlag = false;
let usernameFlag = false;
let passwordFlag = false;

//------------------- ---------------Local Storage and Form Validation-------------------------------------------------//

namee.addEventListener("keyup", function (e) {
  const temp = e.target.value.length;
  localStorage.setItem('namee', e.target.value)

  if (temp > 0) {
    nameFlag = true;
    if (nameFlag && ageFlag && usernameFlag && passwordFlag) {
        
      const html = `
        <a class="anchorNew" href="list.html"><button class="fill__details btn" type="button" >Log In</button></a>
        `;
      loginForm.innerHTML = "";
      loginForm.insertAdjacentHTML("beforeend", html);
    }
  }
});
age.addEventListener("keyup", function (e) {
    localStorage.setItem('age', e.target.value)
  const temp = e.target.value.length;
  if (temp > 0) {
    ageFlag = true;
    if (nameFlag && ageFlag && usernameFlag && passwordFlag) {
       
      const html = `
        <a class="anchorNew" href="list.html"><button class="fill__details btn" type="button" >Log In</button></a>
        `;
      loginForm.innerHTML = "";
      loginForm.insertAdjacentHTML("beforeend", html);
    }
  }
});
username.addEventListener("keyup", function (e) {
  const temp = e.target.value.length;
  localStorage.setItem('username', e.target.value)
  if (temp > 0) {
    usernameFlag = true;
    if (nameFlag && ageFlag && usernameFlag && passwordFlag) {
   
      const html = `
        <a class="anchorNew" href="list.html"><button class="fill__details btn" type="button" >Log In</button></a>
        `;
      loginForm.innerHTML = "";
      loginForm.insertAdjacentHTML("beforeend", html);
    }
  }
});
password.addEventListener("keyup", function (e) {
  const temp = e.target.value.length;
  
  if (temp > 0) {
    passwordFlag = true;
    if (nameFlag && ageFlag && usernameFlag && passwordFlag) {
        
      const html = `
        <a class="anchorNew" href="list.html"><button class="fill__details btn" type="button" >Log In</button></a>
        `;
      loginForm.innerHTML = "";
      loginForm.insertAdjacentHTML("beforeend", html);
    }
  }
});



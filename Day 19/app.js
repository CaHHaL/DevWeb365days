//onclick event in JS
//onmouseenter
//addEventListeners
//input event
//change event
let username=document.querySelector('#username');
let password=document.querySelector('#password');
let btn=document.querySelector('#jsbutton');
let mainDiv =document.querySelector('.login-container')
// let username=document.querySelector('#username');
mainDiv.addEventListener('submit',function(event){
    event.preventDefault();
    alert(`Hi ${username.value} thanks for login in to the site,Your password is ${password.value}`);
    console.log(username.value);
    console.log(password.value);

});



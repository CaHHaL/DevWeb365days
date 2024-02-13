//a <p> with red text says "I am red"
let new_para=document.createElement('p');
new_para.innerText='I am red';
new_para.setAttribute('class','red');
new_para.style.backgroundColor='Blue';
new_para.style.color='red';
let body=document.querySelector('body');
body.append(new_para);


//an <h3> with blue text that says "I'm a blue h3"
let new_heading=document.createElement('h3');
new_heading.innerText=`I'm a blue h3`;
new_heading.setAttribute('class','blue');
new_heading.style.color='blue';
body.append(new_heading);

//a <div> with a black border and pink background color with the following elements inside of it :
//1. another <h1> that says "I am in a div"
//a <p> that says "ME TOO!!"
let new_div = document.createElement("div");
new_div.style.border='4px solid black';
new_div.style.backgroundColor='pink';
let new_h1 =document.createElement('h1');
new_h1.innerText='I am in a div';
let new2_para =document.createElement('p');
new2_para.innerText='MEE TOO!'
body.append(new_div);
new_div.append(new_h1);
new_div.append(new2_para);

//Create a new input and button element on the page using JS only.Set the text button to 'CLick me'
let input=document.createElement("input");
let button=document.createElement("button");
button.setAttribute('class','button_1');
input.setAttribute('class','input_1');
button.innerText='CLick me';
body.append(input);
body.append(button);
// button.style.width="50px";
// button.style.height="20px";
//

//Add following attribute to the element:
// 1. Change placeholder value to input to 'username'
// 2. change the id of button to 'btn'
input.setAttribute('placeholder','username');
button.setAttribute('id','btn');

//Access the btn using the querySelector and button id. CHange the button background color to the text color to white
document.querySelector('#btn').style.backgroundColor='blue';
document.querySelector('#btn').style.color='white';

//create an h1 element on the page and set its text to "DOM Practice" underline.Change its color to purple.
let heading_2=document.createElement('h1');
heading_2.innerText='DOM Practice';
body.append(heading_2);
heading_2.style.color ='purple';
heading_2.style.textDecoration='underline';


//Create a p tag on the page and set its text to "Learning heros" where heros is bold
let new_para2=document.createElement('p');
new_para2.innerHTML='Learning <b>heroes</b>';
body.append(new_para2);


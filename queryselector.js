var  header = document.querySelector("#main-header");
header.style.borderBottom ="solide 4px #ccc" ;

var input = document.querySelector("input");
input.value ="hello world"


var submit = document.querySelector(`input[type="submit"]`);
submit.value="SEND"

var item= document.querySelector(`.list-group-item`);
item.style.color =`red`;

var lastItem = document.querySelector(`.list-group-item:last-child`);
lastItem.style.color = "blue";

var secondItem =document.querySelector(`.list-group-item:nth-child(2)`);
secondItem.style.backgroundColor="green";

var thirdItem =document.querySelector(`.list-group-item:nth-child(3)`);
thirdItem.style.color="white";


var titles = document.querySelectorAll(`.title`);
console.log(titles)
titles[0].textContent = `hello`;

var odd = document.querySelectorAll(`li:nth-child(odd)`);
var even = document.querySelectorAll(`li:nth-child(even)`);

for(var i=0 ; i< odd.length ; i++)
{
odd[i].style.backgroundColor="green";
//even[i].style.backgroundColor="#ccc";
}
var color = "green"; 
var elts = document.querySelectorAll('li'); 
 
for(let i = 0; i < elts.length; i++) { 
	elts[1].style.color = color;
}
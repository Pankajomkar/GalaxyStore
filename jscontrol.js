// Alright so we've discussed the way you can grab html elements, let's
// see how we can interact with them in Javascript!

// Type this into your console:

// Grab the Header with a
var header = document.querySelector("a")
var hover = document.querySelector("#hover")
var hoverbkp = hover.textContent 
console.log(hoverbkp)
var clickMe = document.querySelector("#srch")
var doubleclickMe = document.querySelector("#ddl")

// Then you can interface with the object.

// Interface with the style.
//You will see a ton of options show up!
header.style.color = 'red'

// Now let's connect it to the script to
// change it once every second to a random color!

// Random Color Function:

// http://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

// Simple function for clarity
function changeHeaderColor(){
  colorInput = getRandomColor()
  header.style.color = colorInput;
}

// Now perform the action over intervals (milliseocnds):
setInterval("changeHeaderColor()",500);


// On hover function

hover.addEventListener('mouseover',function(){
	hover.textContent = 'Sorry no offers right now';
	hover.style.color = 'red';
})

hover.addEventListener('mouseout',function(){
	//hover.textContent = hoverbkp.textContent.innerHTML;
	hover.textContent = "Top Offers";
	hover.style.color = 'blue';
})

clickMe.addEventListener('click',function(){
	clickMe.textContent = "More Stuff";
	clickMe.style.color = 'blue';
})

doubleclickMe.addEventListener('dblclick',function(){
	doubleclickMe.textContent = "Hello";
	doubleclickMe.style.color = 'blue';
})


//additonal functionality to change the color of h1 tag
/*$('input').eq(0).keypress(function(evevnt){
 if(event.which === 97 ){
    $('h1').toggleClass('turnBlue')
 }
  console.log(event)
})*/
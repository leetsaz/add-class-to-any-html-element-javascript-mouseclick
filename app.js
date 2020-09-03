// Select any element and add class to it
// print id and tagName in the console
// tag name must be CAPITAL letter

var elem;

document.addEventListener('click', function ( event ) {
  console.log("Id is: ", event.target.id, ", Tag is: ", event.target.tagName);

  elem = event.target.id;

  if( event.target.tagName == 'DIV'){
    document.getElementById(elem).classList.add("red");
  }

  if( event.target.tagName == 'P'){
    document.getElementById(elem).classList.add("bluevioletText");
  }
});


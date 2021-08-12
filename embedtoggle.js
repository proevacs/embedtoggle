$('head').append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/proevacs/embedtoggle@v1.1/embedtoggle.css">');
var linkLoader = function (param) {
        var headID = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';

        //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
        headID.appendChild(link);

        link.href = 'http://fonts.googleapis.com/css?family=' + param.family + '&effect=' + param.effect;


    };
            // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
        

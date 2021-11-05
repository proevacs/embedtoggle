
          
 // Create new link Element
        var link = document.createElement('link');  
        var linkTwo = document.createElement('link');
  
        // set the attributes for link element
           link.rel = 'stylesheet';
           linkTwo.rel= 'stylesheet';
      
        link.type = 'text/css';
        linkTwo.type = 'text/css';
      
        link.href = 'https://cdn.jsdelivr.net/gh/proevacs/embedtoggle@v1.5/embedtoggle.css'; 
        linkTwo.href = 'https://cdn.jsdelivr.net/gh/proevacs/embedtoggle@v1.9/embed_slide_up.css';
  
        // Get HTML head element to append 
        // link element to it 
          document.getElementsByTagName('HEAD')[0].appendChild(link); 
          document.getElementsByTagName('HEAD')[0].appendChild(linkTwo);
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
        

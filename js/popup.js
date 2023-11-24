
// Get the modal -Bangladesh Tangail
var modal_t = document.getElementById("myModal_tangail");

// Get the button that opens the modal
var btn = document.getElementById("myBtn_tangail");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("btn-close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal_t.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {  
  modal_t.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_t) {
    modal_t.style.display = "none";
  }
}

// Get the modal -Bangladesh Satkhira
var modal_s = document.getElementById("myModal_satkhira");

// Get the button that opens the modal
var btn = document.getElementById("myBtn_satkhira");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("btn-close")[1];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal_s.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {  
  modal_s.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_s) {
    modal_s.style.display = "none";
  }
}


$(document).ready(function(){
  /* Get iframe src attribute value i.e. YouTube video url
  and store it in a variable */
  var url = $("#cartoonVideo").attr('src');
  
  /* Assign empty url value to the iframe src attribute when
  modal hide, which stop the video playing */
  $("#myModal").on('hide.bs.modal', function(){
      $("#cartoonVideo").attr('src', '');
  });
  
  /* Assign the initially stored url back to the iframe src
  attribute when modal is displayed again */
  $("#myModal").on('show.bs.modal', function(){
      $("#cartoonVideo").attr('src', url);
  });
});
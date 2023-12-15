// create a new anchor element
var createAccountLink = document.createElement("a");

// set the text and href attributes
createAccountLink.textContent = "Create Account";
createAccountLink.setAttribute("href", "/create-account");

// add an event listener for when the link is clicked
createAccountLink.addEventListener("click", function(event) {
  // prevent the default link behavior
  event.preventDefault();
  
  // clear the recommended text from the dropdown
  var dropdown = document.getElementById("myDropdown");
  dropdown.selectedIndex = -1;
  
  // navigate to the create account page
  window.location.href = createAccountLink.getAttribute("href");
});

// append the link to a parent element
var parentElement = document.getElementById("myParentElement");
parentElement.appendChild(createAccountLink);

var form = document.getElementById("myForm");
var inputs = form.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].setAttribute("autocomplete", "off");
}

$(document).ready(function() {
    $("#clearButton").click(function() {
      $("#myDropdown").val("");
    });
  });

$(document).ready(function() {
    // Clear dropdown selection on page load
    $('#myDropdown option:selected').prop('selected', false);
    
    // Clear dropdown selection on change event
    $('#myDropdown').change(function() {
      if($(this).val() !== '') {
        $(this).data('prevValue', $(this).val());
      } else {
        $(this).removeData('prevValue');
      }
    });
  
    // Prevent dropdown from showing previous value on focus
    $('#myDropdown').focus(function() {
      if($(this).data('prevValue')) {
        $(this).val('').removeData('prevValue');
      }
    });
  });
  
  
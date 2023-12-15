
  function validateAge() {
    var age = document.getElementById("Age").value;
    var ageError = document.getElementById("ageError");
    
    if (age === "default") {
      ageError.style.display = "block";
    } else {
      ageError.style.display = "none";
    }
  }

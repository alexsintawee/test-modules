
  function handleLanguageChange(selectElement) {
    var otherLanguageInput = document.getElementById("OtherLanguage");
    if (selectElement.value === "Other") {
      otherLanguageInput.style.display = "block";
      otherLanguageInput.setAttribute("required", "true");
    } else {
      otherLanguageInput.style.display = "none";
      otherLanguageInput.removeAttribute("required");
    }; 
  }; 
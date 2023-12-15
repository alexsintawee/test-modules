const dropdown = document.createElement("div");
dropdown.classList.add("dropdown");
document.body.appendChild(dropdown);

const listItems = document.querySelectorAll("li");

listItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    const dropdownContent = item.getAttribute("data-dropdown");
    dropdown.innerHTML = dropdownContent;
    dropdown.style.top = `${item.offsetTop + item.offsetHeight}px`;
    dropdown.style.left = `${item.offsetLeft}px`;
    dropdown.classList.add("active");
  });

  item.addEventListener("mouseout", () => {
    dropdown.classList.remove("active");
  });
});

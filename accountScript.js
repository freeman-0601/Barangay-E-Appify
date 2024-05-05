var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  
const divElement = document.querySelector('dashboard'); // Replace 'div' with the ID or class of your actual div element

  divElement.addEventListener('click', function() {
    window.location.href = 'https://www.example.com'; // Replace 'https://www.example.com' with the URL of your desired page
  });
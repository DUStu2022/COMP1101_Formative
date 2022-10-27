const navbar = document.getElementById("navbarToggle");
const toggler = document.getElementById("navbarToggler");

toggler.addEventListener("click", () => 
{
    if(navbar.classList.contains("collapse"))
    {
        navbar.classList.remove("collapse");
    }
    else
    {
        navbar.classList.add("collapse");
    }
})

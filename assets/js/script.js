//Use javascript to select and recolor 'seo' within Horiseon (h1 element) to be the desired color without impacting the screen readers ability to correctly enunciate the whole word instead of splitting it up and sounding funky

// use a function to set the innerHTML of h1 to be the sum of the variables hori + seo + n while stylizing the 'seo' to the desired colors
function colorLetters() {
    // Selects the h1 element using queryselector and uses that to create a variable called element
    var element = document.querySelector("h1");

    // retrieving the text from the element by using innerHTML to denote what is contained within the h1 element
    var horiseon = element.innerHTML;

    // using substring to pick out the letters 'Hori' -changed text to horiseon 
    var hori = horiseon.substring(0, 4);

    // using substring to pick out the letters 'seo' 
    var seo = horiseon.substring(4,7);

    // using substring to pick out the letter 'n'
    var n = horiseon.substring(7);

    element.innerHTML = hori + "<span style='color: #d9dcd6;'>" + seo + "</span>" + n;
}
//To do connect to html run after DOM loads
document.addEventListener("DOMContentLoaded", colorLetters);
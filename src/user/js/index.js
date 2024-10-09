

// event handlers

// In general, the DOMContentLoaded event is a good choice 
// if your JavaScript code doesn’t rely on external assets, 
// while the window load event is better suited for code that depends on all assets being loaded.
//
// The load event can take a bit longer to fire compared to DOMContentLoaded, 
// as it waits for all assets to load. If your script doesn’t depend on other assets, 
// you might want to use DOMContentLoaded instead for a faster response time.

// the initial HTML document has been completely loaded and parsed, 
// without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener('DOMContentLoaded', function() {
    // Your code here
});

//when the whole page has fully loaded, 
// including all dependent resources such as stylesheets, scripts, iframes, and images. 
window.addEventListener('load', function() {
    // Your code here
});

$(document).ready(function() {
    // Your code here
});

// behavior

const body = document.querySelector("body");

const btnToggleTheme = document.getElementById("btnToggleTheme");
btnToggleTheme.addEventListener('click', toggleTheme);

function toggleTheme(){
    if(body.getAttribute('data-bs-theme') == 'dark'){
        body.setAttribute('data-bs-theme','light');
        btnToggleTheme.innerHTML='<i class="fa fa-sun">';
    }else{
        body.setAttribute('data-bs-theme','dark');
        btnToggleTheme.innerHTML='<i class="fa fa-moon">';
    }
}





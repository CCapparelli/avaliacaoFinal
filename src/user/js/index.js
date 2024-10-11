
const body              = document.querySelector("body");
const btnToggleTheme    = document.getElementById("btnToggleTheme");

// event handlers

btnToggleTheme.addEventListener('click', toggleTheme);

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

var currentTheme = () => localStorage.getItem('theme');
    

$(window).ready(function() {
    var theme = currentTheme();
    if (theme) {
        body.setAttribute('data-bs-theme', theme);
        if (theme === 'dark') {
            btnToggleTheme.removeAttribute('checked');
        }
    } else {
       localStorage.setItem('theme', body.getAttribute('data-bs-theme'));
    }
});

// behavior

function toggleTheme() {
    if(localStorage.getItem("theme") == 'dark'){
        body.setAttribute('data-bs-theme','light');
        btnToggleTheme.setAttribute('checked', '');
    } else {
        body.setAttribute('data-bs-theme','dark');
        btnToggleTheme.removeAttribute('checked');
    }
    localStorage.setItem("theme", body.getAttribute('data-bs-theme'))
    applyTheme();
}

var network = $('#network');
var world = $('#world');

function applyTheme() {
    if (currentTheme() === 'dark') {
        world.css('backgroundColor', 'rgb(80,80,80)');
        network.css('backgroundColor', 'rgb(80,80,80)');
    } else {
        world.css('backgroundColor', 'silver');
        network.css('backgroundColor', 'silver');
    }
}

//
// Esta seção carrega dinamicamente os dados de post armazenados no local storage.
// O cadastro está funcionando (cf. arquivos objectModel.js e fakeData.js), 
// mas existe um bug na hora de atualizar os dados no HTML. 
// A DIV é limpa, os dados são carregados (parece), e logo em seguida removidos.
//
// PROXIMO PASSO !!!
// Resolver esse trem aê!
//

// class PostsBinding { 
//     constructor(element, posts) {
//         this.element = element;
//         this.posts = posts;
//     }

//     update() {
//         this.element.innerHTML = '';
//         for (const post of this.posts) {
//             this.element.innnerHTML += `
// <div class="post d-flex gap-2">
//     <a href="/src/user/pages/posts/"><img class="postImg rounded-2" src="${post.imagem}" alt=""></a>
//     <div class="d-flex flex-column justify-content-between">
//         <div class="postInfo postOK">
//             <a href="/src/user/pages/posts/">
//                 <h6 class="postAuthorName p-0 m-0 fs-5 fw-bold">${post.author.name}</h6>
//                 <p class="postDate p-0 m-0 fst-italic small">Data da postagem: ${post.dataPublicacao}</p>
//                 <p class="postSummary p-0 m-0 mt-1 small align text-start">${post.sumario}</p>
//             </a> 
//         </div>
//         <div class="postInfo postAuthor postOK">
//             <a href="/src/user/pages/posts/">
//                 <img class="postAuthorImg" src="${post.author.fotoPath}" alt="">
//                 <span>Posted by ${post.author.name}</span>
//             </a>
//         </div>
//     </div>
// </div>            
//             `;
//         }
//     }
// }



// localStorage.removeItem('fakeTeam');
// assureFakeData();

// var fakeTeam  = Team.deserialize(localStorage.getItem('fakeTeam'));
// var fakePosts = Posts.deserialize(localStorage.getItem('fakePosts'));

// var div = document.getElementById('posts');

// var postBind = new PostsBinding(div, fakePosts);
// postBind.update();

// div.innerHTML = '';
// fakePosts.forEach(post => {
//     div.innnerHTML += `
// <div class="post d-flex gap-2">
//     <a href="/src/user/pages/posts/"><img class="postImg rounded-2" src="${post.imagem}" alt=""></a>
//     <div class="d-flex flex-column justify-content-between">
//         <div class="postInfo postOK">
//             <a href="/src/user/pages/posts/">
//                 <h6 class="postAuthorName p-0 m-0 fs-5 fw-bold">${post.author.name}</h6>
//                 <p class="postDate p-0 m-0 fst-italic small">Data da postagem: ${post.dataPublicacao}</p>
//                 <p class="postSummary p-0 m-0 mt-1 small align text-start">${post.sumario}</p>
//             </a> 
//         </div>
//         <div class="postInfo postAuthor postOK">
//             <a href="/src/user/pages/posts/">
//                 <img class="postAuthorImg" src="${post.author.fotoPath}" alt="">
//                 <span>Posted by ${post.author.name}</span>
//             </a>
//         </div>
//     </div>
// </div>            
//     `;
// });




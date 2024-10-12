$(window).ready(function() {
    //
});

//
// Configurando os temas (dark e light)...
//
const network     = document.getElementById('network');
const world       = document.getElementById('world');
var colorBinder   = new ColorBinder([world, network], defaultScheme);
var homeToggler   = new ThemeToggler(body, btnToggleTheme, [colorBinder]);

//
// Carregando os dados de post armazenados localmente...
//
class HomePostsBinder { 
    constructor(element) {
        this.element = element;
        this.imagePath = 'src/user/img/';
    }
    bind(posts) {
        this.element.innerHTML = '';
        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            let id = post.id;
            this.element.innerHTML += `
            <div class="post d-flex gap-2">
                <a href="#" onclick="verPost(${post.id});"><img class="postImg rounded-2" src="${this.imagePath + post.imagem}" alt=""></a>
                <div class="d-flex flex-column justify-content-between"> 
                    <div class="">
                        <a href="#" onclick="verPost(${post.id});">
                            <h6 class="postAuthorName p-0 m-0 fs-5 fw-bold">${post.titulo}</h6>
                            <p class="postDate p-0 m-0 fst-italic small">Data da postagem: ${post.dataPublicacao}</p>
                            <p class="postSummary p-0 m-0 mt-1 small align text-start">${post.sumario}</p>
                        </a> 
                    </div>
                    <div class="postAuthor ">
                        <a href="#" onclick="verPost(${post.id});">
                            <img class="postAuthorImg" src="${post.author.imagem}" alt="">
                            <span>Posted by ${post.author.name}</span>
                        </a>
                    </div>                
                </div>
            </div>
            `;
        }
    }
}
var postBinder = new HomePostsBinder(document.getElementById('posts'));
postBinder.bind(storage.postItems.slice(0, 4));

function verPost(id) {
    storage.setCurrentPost(id);
    window.location.href = 'src/user/pages/posts/';
}

// /


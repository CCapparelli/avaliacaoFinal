class BlogComposer {
    constructor(parent) {
        this.imagePath  = '../../img/'
        this.parent     = parent;
        this.carousel   = this.#addCarousel();
        this.postsTitle = this.#addTitle();
        this.posts      = this.#addPosts();
    }
    #addCarousel() {
        var classes = 'topImages d-flex justify-content-center align-items-center';
        var section = new Section('topImages', classes, this.parent);
        section.html(`
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../../user/img/cortado/natureza1.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../user/img/cortado/natureza2.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../user/img/cortado/natureza3.png" class="d-block w-100" alt="...">
                    </div>
                </div>
            </div>`);
        return section;
    } 
    #addTitle() {
        var classes = 'p-0 align-self-center';
        var text    = 'BLOG POSTS';
        var title   = new HtmlTag('h3', 'title', classes, null, text, this.parent);
        return title;
    }  
    #addPosts() {
        var classes = 'blog w-100 d-flex flex-row flex-wrap gap-3 p-3 justify-content-center';
        var section = new Section('blog', classes, this.parent);

        var data = storage.postItems;
        var host = document.getElementById('blog');

        host.innerHTML = '';
        for (let i = 0; i < data.length; i++) {
            const post = data[i];
            host.innerHTML += `
            <div class="post d-flex gap-2 p-3 rounded">
                <a onclick="blogPage.verPost(${post.id});"><img class="postImg rounded-2" src="${this.imagePath + post.imagem}" alt=""></a>
                <div class="d-flex flex-column justify-content-between"> 
                    <div class="">
                        <a onclick="blogPage.verPost(${post.id});">
                            <h6 class="postAuthorName p-0 m-0 fs-5 fw-bold">${post.titulo}</h6>
                            <p class="postDate p-0 m-0 fst-italic small">Data da postagem: ${post.dataPublicacao}</p>
                            <p class="postSummary p-0 m-0 mt-1 small align text-start">${post.sumario}</p>
                        </a> 
                    </div>
                    <div class="postAuthor ">
                        <a onclick="blogPage.verPost(${post.id});">
                            <img class="postAuthorImg" src="${this.imagePath + post.author.imagem}" alt="">
                            <span>Posted by ${post.author.name}</span>
                        </a>
                    </div>                
                </div>
            </div>
            `;
        }
        return section;
    }    
}

class BlogPage extends Page {
    constructor() {
        super();
        this.postPageAddr   = './post.html';
        this.headerComposer = new HeaderComposer(this.header);
        this.mainComposer   = new BlogComposer(this.main);
        
        this.colorBinder    = new ColorBinder([this.mainComposer.posts.element], defaultScheme);
        this.themeToggler   = new ThemeToggler([this.colorBinder], this.applyTheme);
    }
    
    verPost(id) {
        storage.setCurrentPost(id);
        window.location.href = this.postPageAddr;
    }

    applyTheme = function(isDark) {
        var cards = document.querySelectorAll('.post');
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = isDark 
                                           ? 'rgb(60,60,60)' 
                                           : 'rgb(150,150,150)';
        }
    }

    verPost(id) {
        storage.setCurrentPost(id);
        window.location.href = this.postPageAddr;
    }
}

const blogPage = new BlogPage();

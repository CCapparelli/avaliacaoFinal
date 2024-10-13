class BlogComposer {
    constructor(parent) {
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
        var classes = 'posts w-100 d-flex flex-row flex-wrap gap-3 p-3 justify-content-center';
        var section = new Section('posts', classes, this.parent);
        section.html(`
            <div class="post d-flex gap-2 p-3 rounded">
                <a onclick="blogPage.verPost(1);"><img class="postImg rounded-2" src="../../../user/img/explore1.jpg" alt=""></a>
                <div class="d-flex flex-column justify-content-between">
                    <div class="postInfo postOK">
                        <h6 class="exploreName p-0 m-0 fs-5 fw-bold">Minha viagem ao Japão!</h6>
                        <p class="exploreSubTitle p-0 m-0 fst-italic small">Data da postagem: 09/10/2024</p>
                        <p class="exploreDesc p-0 m-0 mt-1 small align text-start">Breve introdução e comentários em relação ao conteúdo do post.</p>
                    </div>
                    <div class="postInfo postAuthor postOK">
                        <a href="../../../user/pages/posts/">
                            <img class="postAuthorImg" src="../../../user/img/original/time/alice.jpg" alt="">
                            <span>Posted by Alice</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="post d-flex gap-2 p-3 rounded">
                <a onclick="blogPage.verPost(2);"><img class="postImg rounded" src="../../../user/img/explore2.jpg" alt=""></a>
                <div class="d-flex flex-column justify-content-between">
                    <div class="postInfo">
                        <h6 class="exploreName p-0 m-0 fs-5 fw-bold">NOME LUGAR</h6>
                        <p class="exploreSubTitle p-0 m-0 fst-italic small">SUBTITULO</p>
                        <p class="exploreDesc p-0 m-0 mt-1 small align text-start">LOREM</p>
                    </div>
                    <div class="postInfo postAuthor">
                        <img class="postAuthorImg" src="../../../user/img/original/time/elizabeth.jpg" alt="">
                        <span>Post por Elizabeth</span>
                    </div>
                </div>
            </div>
        
            <div class="post d-flex gap-2 p-3 rounded">
                <a onclick="blogPage.verPost(3);"><img class="postImg rounded" src="../../../user/img/explore3.jpg" alt=""></a>
                <div class="d-flex flex-column justify-content-between">
                    <div class="postInfo">
                        <h6 class="exploreName p-0 m-0 fs-5 fw-bold">NOME LUGAR</h6>
                        <p class="exploreSubTitle p-0 m-0 fst-italic small">SUBTITULO</p>
                        <p class="exploreDesc p-0 m-0 mt-1 small align text-start">LOREM</p>
                    </div>
                    <div class="postInfo postAuthor">
                        <img class="postAuthorImg" src="../../../user/img/original/time/sergio.jpg" alt="">
                        <span>Post por Sergio</span>
                    </div>
                </div>
            </div>

            <div class="post d-flex gap-2 p-3 rounded">
                <a onclick="blogPage.verPost(4);"><img class="postImg rounded" src="../../../user/img/network1.jpg" alt=""></a>
                <div class="d-flex flex-column justify-content-between">
                    <div class="postInfo">
                        <h6 class="exploreName p-0 m-0 fs-5 fw-bold">NOME LUGAR</h6>
                        <p class="exploreSubTitle p-0 m-0 fst-italic small">SUBTITULO</p>
                        <p class="exploreDesc p-0 m-0 mt-1 small align text-start">LOREM</p>
                    </div>
                    <div class="postInfo postAuthor">
                        <img class="postAuthorImg" src="../../../user/img/network1.jpg" alt="">
                        <span>Post por João</span>
                    </div>
                </div>
            </div>
        
            <div class="post d-flex gap-2 p-3 rounded">
                <a onclick="blogPage.verPost(5);"><img class="postImg rounded" src="../../../user/img/network2.jpg" alt=""></a>
                <div class="d-flex flex-column justify-content-between">
                    <div class="postInfo">
                        <h6 class="exploreName p-0 m-0 fs-5 fw-bold">NOME LUGAR</h6>
                        <p class="exploreSubTitle p-0 m-0 fst-italic small">SUBTITULO</p>
                        <p class="exploreDesc p-0 m-0 mt-1 small align text-start">LOREM</p>
                    </div>
                    <div class="postInfo postAuthor">
                        <img class="postAuthorImg" src="../../../user/img/network2.jpg" alt="">
                        <span>Post por Maria</span>
                    </div>
                </div>
            </div>

            <div class="post d-flex gap-2 p-3 rounded">
                <a onclick="blogPage.verPost(6);"><img class="postImg rounded" src="../../../user/img/network3.jpg" alt=""></a>
                <div class="d-flex flex-column justify-content-between">
                    <div class="postInfo">
                        <h6 class="exploreName p-0 m-0 fs-5 fw-bold">NOME LUGAR</h6>
                        <p class="exploreSubTitle p-0 m-0 fst-italic small">SUBTITULO</p>
                        <p class="exploreDesc p-0 m-0 mt-1 small align text-start">LOREM</p>
                    </div>
                    <div class="postInfo postAuthor">
                        <img class="postAuthorImg" src="../../../user/img/network3.jpg" alt="">
                        <span>Post por José</span>
                    </div>
                </div>
            </div>`);
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

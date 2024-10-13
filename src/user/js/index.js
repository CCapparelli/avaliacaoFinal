class HomePostsBinder { 
    constructor(data, element) {
        this.imagePath  = 'src/user/img/';

        this.data       = data;
        this.element    = element;
        this.#bind();
    }
    #bind() {
        this.element.innerHTML = '';
        for (let i = 0; i < this.data.length; i++) {
            const post = this.data[i];
            this.element.innerHTML += `
            <div class="post d-flex gap-2">
                <a onclick="homePage.verPost(${post.id});"><img class="postImg rounded-2" src="${this.imagePath + post.imagem}" alt=""></a>
                <div class="d-flex flex-column justify-content-between"> 
                    <div class="">
                        <a onclick="homePage.verPost(${post.id});">
                            <h6 class="postAuthorName p-0 m-0 fs-5 fw-bold">${post.titulo}</h6>
                            <p class="postDate p-0 m-0 fst-italic small">Data da postagem: ${post.dataPublicacao}</p>
                            <p class="postSummary p-0 m-0 mt-1 small align text-start">${post.sumario}</p>
                        </a> 
                    </div>
                    <div class="postAuthor ">
                        <a onclick="homePage.verPost(${post.id});">
                            <img class="postAuthorImg" src="${this.imagePath + post.author.imagem}" alt="">
                            <span>Posted by ${post.author.name}</span>
                        </a>
                    </div>                
                </div>
            </div>
            `;
        }
    }
}

class HomeMainComposer {
    constructor(parent) {
        this.parent     = parent;
        this.banner     = this.#addBanner();
        this.world      = this.#addWorld();
        this.postsView  = this.#addPostsView();
        this.network    = this.#addNetworking();
    }
    #addBanner() {
        var classes = 'banner d-flex justify-content-between p-3';
        var section = new Section('banner', classes, this.parent);
        section.html(`
            <div class="bannerkLeft">
                <h4 class="p-0 m-0 fw-bold">Titulo do Website</h4>
                <p class="p-0 m-0 small">Subtitulo do Website</p>
                <p class="p-0 m-0 mt-2">Descrição</p>
            </div>
            <div class="bannerkRight">
                <img class="bannerImg" src="src/user/img/original/time/sergio.jpg" alt="">
            </div>`);
        return section;
    }    
    #addWorld() {
        var classes = 'world w-100 p-3 d-flex flex-column';
        var section = new Section('world', classes, this.parent);
        section.html(`
            <h4 class="align-self-center p-0 mt-0">EXPLORE O MUNDO!</h4>
            <div id="worldContent" class="worldContent d-flex justify-content-between gap-3">
                <div class="worldInfo">
                    <p class="p-0 m-0 fw-bold">Subtitulo</p>
                    <p class="p-0 m-0 small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sapiente sint adipisci eveniet dignissimos exercitationem hic alias cupiditate velit, aspernatur laborum corporis minus sunt dolor ad impedit deleniti ab tempora.</p>
                </div>
                <div id="worldImages" class="worldImages d-flex justify-content-center">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="src/user/img/cortado/natureza1.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="src/user/img/cortado/natureza2.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="src/user/img/cortado/natureza3.png" class="d-block w-100" alt="...">
                            </div>
                        </div>
                    </div>
                </div>
            </div>`);
        return section;
    }
    #addPostsView() {
        var classes = 'postsView w-100 p-3 d-flex justify-content-start mt-3 gap-3';
        var section = new Section('postsView', classes, this.parent);
        section.html(`
            <div id="posts" class="posts w-100 d-flex flex-column gap-3"></div>
            <div class="postsSearch w-50 d-flex flex-column justify-content-start gap-2">
                <div class="d-flex justify-content-around align-items-center">
                    <div class="w-100 postsSearchTrigger input-group">
                        <input id="txtSearch" class="txtSearch form-control py-2" type="search" value="search">
                        <span class="input-group-append">
                            <button class="btn" type="button"><i class="fa fa-search"></i></button>
                        </span>
                    </div>
                </div>
                <select id="cmbSearchRecentes" name="cmbSearchRecentes" class="form-select">
                <option value="">Posts recentes</option>
                </select>
                <select id="cmbSearchTemas" name="cmbSearchTemas" class="form-select">
                    <option selected>Temas do Blog</option>
                </select>
                <select id="cmbSearchGaleria" name="cmbSearchGaleria" class="form-select">
                    <option value="">Galeria</option>
                </select>
                <select id="cmbSearchCategoria" name="cmbSearchCategoria" class="form-select">
                    <option value="">Categorias</option>
                </select>
                <select id="cmbSearchBlogSergio" name="cmbSearchBlogSergio" class="form-select">
                    <option value="">Blog do Sergio</option>
                </select>
            </div>`);
        return section;
    }  
    #addNetworking() {
        var classes = 'network d-flex flex-column';
        var section = new Section('network', classes, this.parent);
        section.html(`
            <h4 class="align-self-center p-0 mt-3">MONTE UM NETWORKING!</h4>
            <div class="networkInfo w-100 p-3 d-flex gap-3">
                <div class="networkContent">
                    <p class="p-0 m-0 fw-bold">Conheça novas pessoas. Compartilhe experiências!</p>
                    <p class="p-0 m-0 small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt blanditiis natus saepe obcaecati possimus aliquid veritatis odit provident itaque asperiores? Deserunt, sint aut ullam commodi ducimus iste. Quia, error debitis?</p>
                </div>
                <div class="networkImages w-50 d-flex justify-content-center gap-2">
                    <img class="networkImage rounded-2" src="src/user/img/network1.jpg" alt="">
                    <img class="networkImage rounded-2" src="src/user/img/network2.jpg" alt="">
                    <img class="networkImage rounded-2" src="src/user/img/network3.jpg" alt="">
                </div>
            </div>`);
        return section;
    }
}

class HomePage extends Page {
    constructor() {
        super();
        this.postPageAddr   = 'src/user/pages/blog/post.html';
        this.itemsToShow    = 4;
        
        this.headerComposer = new HeaderComposer(this.header, true);
        this.mainComposer   = new HomeMainComposer(this.main);
        
        this.colorBinder    = new ColorBinder([this.mainComposer.world.element, this.mainComposer.network.element], defaultScheme);
        this.themeToggler   = new ThemeToggler([this.colorBinder]);

        this.data           = storage.postItems.slice(0, this.itemsToShow);
        this.posts          = this.mainComposer.postsView.element.children[0]; 
        this.postBinder     = new HomePostsBinder(this.data, this.posts);
    }
    
    verPost(id) {
        storage.setCurrentPost(id);
        window.location.href = this.postPageAddr;
    }
}

const homePage = new HomePage();

class PostBinder { 
    constructor(element) {
        this.imagePath  = '../../img/';
        this.element    = element;
        this.data       = storage.currentPost();
        this.#bind();
    }
    #bind() {
        var post = this.data;
        var content = `
            <div class="postData d-flex flex-column justify-content-start align-items-center">
                <div class="postHashtags mt-2 d-flex flex-wrap justify-content-around gap-3">
                    <span class="py-1 px-2 small hashtag cHand rounded">VIAGENS</span>
                    <span class="py-1 px-2 small hashtag cHand rounded">${post.author.name}</span>
                    <span class="py-1 px-2 small hashtag cHand rounded">JAPÃO</span>
                </div>
                <h3 id="postTitle" class="postTitle m-0 p-0 mt-2 mb-3">${post.titulo}</h3>
                <img class="postImage rounded-2" src="${this.imagePath + post.imagem}" alt="">
                <p id="postDesc" class="memberTitle fw-bold">${post.sumario}</p>
                <div>`;
        
        for (let i = 0; i < post.conteudo.length; i++) {
            const paragrafo = post.conteudo[i];
            content += `<p class="postContent pt-2 pb-0 m-0 text-start">${paragrafo}</p>`;
            
        }

        content += `
                </div>
                <p id="postData" class="memberDesc small text-center">Data da postagem: ${post.dataPublicacao}<p>
            </div>
            <div class="postAuthor d-flex flex-column justify-content-start align-items-center gap-2 me-2">
                <h3 id="memberName" class="m-0 p-0 mt-2 memberName">SOBRE O AUTOR</h3>
                <img class="postAuthorImg rounded-2" src="${this.imagePath + post.author.imagem}" alt="">
                <p class="fs-4">Olá eu sou ${post.author.name}!</p>
            </div>`;
        this.element.innerHTML = content;
    }
}

class PostComposer {
    constructor(parent) {
        this.parent     = parent;
        this.section    = this.#addSection();
    }
    #addSection() {
        var classes = 'post d-flex gap-3 mx-2 justify-content-start';
        var section = new Section('post', classes, this.parent);
        return section;
    }    
}

class PostPage extends Page {
    constructor() {
        super();
        this.headerComposer = new HeaderComposer(this.header);
        this.mainComposer   = new PostComposer(this.main);
        this.postBinder     = new PostBinder(this.mainComposer.section.element);
        this.themeToggler   = new ThemeToggler();
    }
}

const postPage = new PostPage();

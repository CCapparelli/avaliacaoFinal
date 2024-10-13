class AboutComposer {
    constructor(parent) {
        this.parent     = parent;
        this.title      = this.#addTitle();
        this.posts      = this.#addAboutUs();
        this.otherTitle = this.#addOtherTitle();
        this.carousel   = this.#addCarousel();
    }
    #addTitle() {
        var classes = 'p-0 align-self-center';
        var text    = 'SOBRE NÓS';
        var title   = new HtmlTag('h3', 'title', classes, null, text, this.parent);
        return title;
    }
    #addAboutUs() {
        var classes = 'aboutUs d-flex flex-column p-3 gap-4 container-fluid';
        var section = new Section('aboutUs', classes, this.parent);
        section.html(`
        <div class="aboutUsItem d-flex gap-3">
            <div class="aboutUsLeft">
                <p class="p-0 m-0 fw-bold">Nossa missão</p>
                <p class="p-0 m-0 small">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat tempore
                    deserunt blanditiis pariatur velit delectus quam fuga soluta, doloribus repellat. Quisquam rem
                    nemo, est quo maiores totam cumque sed ea!</p>
            </div>
            <div class="aboutUsRight d-flex justify-content-around">
                <img class="aboutUsImg rounded-4" src="../../../user/img/sobreMissão.jpg" alt="">
            </div>
        </div>
        <div class="aboutUsItem d-flex flex-row-reverse gap-3">
            <div class="aboutUsLeft">
                <p class="p-0 m-0 fw-bold">Como ajudaremos?</p>
                <p class="p-0 m-0 small">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi eaque
                    delectus fugit dicta, unde nulla ab eveniet libero illum, nemo quaerat repudiandae voluptas est
                    laudantium iusto illo asperiores cumque molestiae!</p>
            </div>
            <div class="aboutUsRight d-flex justify-content-around">
                <img class="aboutUsImg rounded-4" src="../../../user/img/sobreComo.png" alt="">
            </div>
        </div>
        <div class="aboutUsItem d-flex gap-3">
            <div class="aboutUsLeft">
                <p class="p-0 m-0 fw-bold">Natureza e sustentabilidade</p>
                <p class="p-0 m-0 small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusamus,
                    quidem tempore recusandae, consequatur laborum et ipsum assumenda quibusdam delectus minima
                    aliquid eos sit atque, earum debitis eligendi nulla? Similique!</p>
            </div>
            <div class="aboutUsRight d-flex justify-content-around">
                <img class="aboutUsImg rounded-4" src="../../../user/img/sobreSustentabilidade.jpg" alt="">
            </div>
        </div>`);
        return section;
    }    
    #addOtherTitle() {
        var classes = 'p-0 align-self-center';
        var text    = 'GALERIA';
        var title   = new HtmlTag('h3', 'title', classes, null, text, this.parent);
        return title;
    }  
    #addCarousel() {
        var classes = 'carousel container slide w-100 d-flex justify-content-center align-items.center';
        var section = new Section('carousel', classes, this.parent);
        section.html(`
        <div id="carouselExampleCaptions" class="carousel container p-0 m-0 w-100 d-flex flex-column justify-content-center align-items.center">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner p-0 m-0 ">
                <div class="carousel-item active">
                    <img src="../../../user/img/cortado/natureza1.png" class="img d-block w-100" alt="img 1">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="m-0">First slide label</h5>
                        <p class="text-center">Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../../../user/img/cortado/natureza2.png" class="img d-block w-100" alt="img 2">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="m-0">Second slide label</h5>
                        <p class="text-center">Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../../../user/img/cortado/natureza3.png" class="img d-block w-100" alt="img 3">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="m-0">Third slide label</h5>
                        <p class="text-center">Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../../../user/img/cortado/natureza4.png" class="img d-block w-100" alt="img 4">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="m-0">Fourth slide label</h5>
                        <p class="text-center">Some representative placeholder content for the fourth slide.</p>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>`);
        return section;
    } 
}

class AboutPage extends Page {
    constructor() {
        super();
        this.headerComposer = new HeaderComposer(this.header);
        this.mainComposer   = new AboutComposer(this.main);
        
        this.colorBinder    = new ColorBinder([this.mainComposer.posts.element], defaultScheme);
        this.themeToggler   = new ThemeToggler([this.colorBinder]);
    }
}

const aboutPage = new AboutPage();
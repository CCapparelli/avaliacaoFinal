/* Binders & togglers */

class BodyBinder {
    constructor(element) {
        this.element = element;
    }
    bind() { 
        var theme = (storage.darkTheme) ? 'dark' : 'light';
        this.element.setAttribute('data-bs-theme', theme);
    }
}

class ToggleButtonBinder {
    constructor(element) {
        this.element = element;
    }
    bind() {
        if (storage.darkTheme) {
            this.element.removeAttribute('checked');
        }
        else {
            this.element.setAttribute('checked', '');
        }
    }
}

class ColorBinder {
    constructor(containers, colorScheme) {
        this.containers  = containers;
        this.colorScheme = colorScheme;
    }
    bind() {
        for (let i = 0; i < this.containers.length; i++) {
            const container = this.containers[i];
            if (storage.darkTheme) {
                container.style.color           = this.colorScheme.foreLight;
                container.style.backgroundColor = this.colorScheme.backDark;
            }
            else {
                container.style.color           = this.colorScheme.foreDark;
                container.style.backgroundColor = this.colorScheme.backLight;
            }
            }
    }
}

class ColorScheme {
    constructor(foreDark, backDark, foreLight, backLight) {
        this.backDark = backDark;
        this.backLight = backLight;
        this.foreDark = foreDark;
        this.foreLight = foreLight;
    }
    static with = (backDark, foreDark, foreLight, backLight) => 
   new ColorScheme(backDark, foreDark, foreLight, backLight);
}

class ThemeToggler {
    constructor(colorBinders, func) {
        const trigger       = document.getElementById('btnToggleTheme');

        this.colorBinders   = colorBinders;
        this.func           = func;

        this.bodyBinder     = new BodyBinder(body);
        this.chkTrigger     = new ToggleButtonBinder(trigger);

        this.update();
        this.chkTrigger.element.addEventListener('click', () => {
            storage.toggleTheme();
            this.update();
        });
    }

    update() {
        this.bodyBinder.bind();
        this.chkTrigger.bind();

        if (this.colorBinders) {
            for (let i = 0; i < this.colorBinders.length; i++) {
                this.colorBinders[i].bind();
            }
        }

        if (this.func) {
            this.func(storage.darkTheme);
        }
    }
}

/* HTML elements */

class HtmlTag {
    constructor(tag, id, classes, attributes, text = null, parent = null) {
        this.tag        = tag;
        this.id         = id;
        this.classes    = classes;
        this.attributes = attributes;
        this.text       = text;
        this.parent     = parent;

        this.element    = null;
        this.init();
    }
    init() {
        this.element = document.createElement(this.tag);
        this.#setId(this.element, this.id);
        this.#setText(this.element, this.text);
        this.#setClasses(this.element, this.classes);
        this.#setAttributes(this.element, this.attributes);
        this.#setParent(this.element, this.parent);
    }
    add(element) {
        var child = document.createElement(element.tag);
        child.id = element.id;
        this.#setText(child, element.text);
        this.#setClasses(child, element.classes);
        this.#setAttributes(child, element.attributes);
        this.#setParent(child, element.parent);

        this.element.appendChild(child);
        return child;
    }

    html    = (content) => this.element.innerHTML = content
    htmlAdd = (content) => this.element.innerHTML += content
    
    #setId(element, id) {
        if (id) {
            element.id = id;
        }
    }
    #setText(element, text) {
        if (text) {
            const node = document.createTextNode(text);
            element.appendChild(node);
        }
    }
    #setClasses(element, classes) {
        if (classes) {
            element.className = classes;
        }
    }
    #setAttributes(element, attributes) {
        if (attributes) {
            for (let i = 0; i < attributes.length; i++) {
                const attr = attributes[i];
                if (attr.includes('=')) {
                    var parts = attr.split('=');
                    element.setAttribute(parts[0], parts[1]);
                } else {
                    element.setAttribute(parts[0], '');
                }
            }
        }
    }
    #setParent(element, parent) {
        if (parent) {
            parent.element.appendChild(element);
        } else {
            document.body.appendChild(element);
        } 
    }
}

class Header extends HtmlTag {
    constructor(classes, attributes) {
        super('header', 'header', classes, attributes);
    }
}

class DefaultHeader extends Header {
    constructor() {
        super('header fixed-top');
    }
}

class HeaderComposer {
    constructor(parent, isRoot) {
        this.parent         = parent;
        this.imgPath        = isRoot ? 'src/user/img/'  : '../../img/';
        this.pagePath       = isRoot ? 'src/user/pages/' : '../../pages/';
        this.rootPath       = isRoot ? '#' : '../../../../';

        this.headerMobile   = this.#addHeaderMobile();
        this.headerPC       = this.#addHeaderPC();
    }
    #addHeaderMobile() {
        var classes = 'headerMobile d-none container-fluid d-flex flex-row justify-content-between align-items-center p-3';
        var section = new Section('headerMobile', classes, this.parent);
        section.html(`
            <!-- responsividade: seção oculta, apresentada em mobiles e tablets -->
            <img class="imgLogo" src="${this.imgPath}logo/logo.png" alt="">
            <i id="icoToggleTheme" class="fa fa-sun"></i>
            <div class="headerMobileNav">
                <nav  class="headerMobileNavUL">
                    <ul class="navbar-nav d-flex flex-row gap-3">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="${this.rootPath}"><i class="fa fa-home" title="Home"></i></a></li>
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="${this.pagePath}about/"><i class="fa fa-house-user" title="Sobre a empresa"></i></a></li>
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="${this.pagePath}blog/"><i class="fa fa-rss" title="Blog"></i></a></li>
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="${this.pagePath}team/"><i class="fa fa-users" title="Nosso time"></i></a></li>,
                    </ul>
                </nav>
            </div>`);
        return section;
    }    
    #addHeaderPC() {
        var classes = 'header container-fluid d-flex flex-row justify-content-between align-items-center p-3';
        var section = new Section('header', classes, this.parent);
        section.html(`
            <!-- responsividade: seção oficial, oculta em mobiles e tablets -->
			<div class="d-flex flex-row  gap-3">
                <img class="imgLogo" src="${this.imgPath}logo/logo.png" alt="">
                <p class="cArrow">Empresa</p>
            </div>
            <div class="d-flex justify-content-start align-items-center gap-2">
                <i class="fa fa-moon"></i>
                <div class="form-check form-switch">
                    <input id="btnToggleTheme" class="form-check-input" type="checkbox" checked />
                    <i class="fa fa-sun"></i>
                </div>
            </div>
            <div class="headerNav">
                <nav  class="headerNavUL">
                    <ul class="navbar-nav d-flex flex-row gap-3">
                        <li class="nav-item"><a class="nav-link " aria-current="page" href="${this.rootPath}">Home</a></li>
                        <li class="nav-item"><a class="nav-link " aria-current="page" href="${this.pagePath}about/">Sobre a empresa</a></li>
                        <li class="nav-item"><a class="nav-link " aria-current="page" href="${this.pagePath}blog/">Blog</a></li>
                        <li class="nav-item"><a class="nav-link " aria-current="page" href="${this.pagePath}team/">Nosso time</a></li>
                    </ul>
                </nav>
            </div>`);
        return section;
    }
}

class Main extends HtmlTag {
    constructor(classes, attributes) {
        super('main', 'main', classes, attributes);
    }
}

class DefaultMain extends Main {
    constructor() {
        super('container-fluid p-0 m-0 d-flex flex-column justify-content-start');
    }
}

class Section extends HtmlTag {
    constructor(id, classes, parent) {
        super('section', id, classes, null, null, parent);
    }
}

class Footer extends HtmlTag {
    constructor(classes, attributes) {
        super('footer', 'footer', classes, attributes);
    }
}

class DefaultFooter extends Footer {
    constructor() {
        super('footer d-flex flex-column justify-content-center align-items-center');
        this.element.innerHTML = `
        <section class="footerTop ">
            <div class="footerContatos d-flex flex-column align-items-start">
                <h5 class="m-0 p-0 mt-4 fw-bold">Contatos</h5>
                <p class="m-0 p-0">Telefone: 999999</p>
                <p class="m-0 p-0">E-mail: senai@gmail.com</p>
            </div>
        </section>
        <section class="footerBottom">
            <p class="copyright p-0">Direitos reservados. <span class="author">SENAI</span> 2024</p>
        </section>`;
    }
}

/* HTML components*/

class Modal {
    constructor() {
    }
}

class Page {
    constructor() {
        this.header = new DefaultHeader();
        this.main   = new DefaultMain();
        this.footer = new DefaultFooter();
    }
}
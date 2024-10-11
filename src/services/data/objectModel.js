/*
* um blog é um conjunto (array) de posts
* um post tem um título, um autor, uma data de publicação, uma imagem, um sumário e 
*             conteúdo (um conjunto de parágrafos)
*
* um time é um conjunto (array) de pessoas / membros (team members)
*
* Este site disponibiliza uma série de posts publicados pelos membros de sua equipe (time)
*
*/

class TeamMember {
    constructor(name, fotoFullPath) {
        this.id         = Number(-1);
        this.name       = '' + name;
        this.fotoPath   = '' + fotoFullPath;
    }
    static assureName(nameValue) {
        if (nameValue.length < 3) {
            throw new Error('Nome inválido.');
        }
    }
    static isIdOK = (value) => Number(value) > 0; 
}
class Team {
    constructor() {
        this.teamMembers = [];
    }

    add(member) {
        this.#assureNot(member.name);
        member.id = this.#nextId();
        this.teamMembers.push(member);
    }

    //addRange = (members) => members.each((_,member) => this.add(member));

    remove(member) {
        if (this.teamMembers.includes(member)) {
            throw new Error('Dados inválidos');
        }
        else {
            var idx = this.teamMembers.indexOf(member);
            this.teamMembers.splice(idx, 1);
        }
    }
    #assureNot(memberName) {
        if (!memberName) {
            throw new Error('Nome inválido');
        } else {
            TeamMember.assureName(memberName);
            var other = this.#userByName(memberName);
            if (other) {
                throw new Error(`Nome ${memberName} já existente.`);
            }
        }
    }
    #nextId      = () => this.teamMembers.length + 1;
    #userById    = (value) => this.teamMembers.filter(x => x.id === value)[0];
    #userByName  = (value) => this.teamMembers.filter(x => x.name === value)[0];

    serialize = () => JSON.stringify(this.teamMembers);
    static deserialize = (value) => JSON.parse(value);
}

class Post {
    constructor(titulo, dataPublicacao, imagem, author) {
        if (!author instanceof TeamMember) {
            throw new Error('Parâmetro author inválido.');
        }
        this.titulo         = '' + titulo;
        this.dataPublicacao = '' + dataPublicacao;
        this.author         = author;
        this.imagem         = imagem;
       
        this.id             = Number(-1);
        this.sumario        = `Sumário do post de ${author.name}.`;
        this.conteudo       = [];
    }
    assure() {
        if (!isIdOK()) {
            throw new Error('Id inválido.');
        }
        if (!isTituloOK()) {
            throw new Error('Título inválido.');
        }
        if (!isDataOK()) { 
            throw new Error('Data da publicação inválido. [dd/MM/yyyy]');
        }
        if (!isAuthorOK()) {
            throw new Error('Autor inválido.');
        }
        if (!isSumarioOK(this.sumario)) {
            throw new Error('Sumário inválido.');
        }
    }
    static isIdOK      = (value) => Number(value) > 0; 
    static isTituloOK  = (value) => value.length > 5; 
    static isDataOK    = (value) => value.length === 10; // usar regex aqui!!!
    static isSumarioOK = (value) => value.length > 10;
    static isAuthorOK  = (value) => {
        if (!value instanceof TeamMember) {
            throw new Error('Parâmetro author inválido.');
        }
        TeamMember.assureName(value.name);
        return value.isIdOK;
    }
   
}
class Posts {
    constructor() {
        this.items = [];
    }
    add(post) {
        if (!post.author instanceof TeamMember) {
            throw new Error('Parâmetro author inválido.');
        }
        this.#assureNot(post.titulo, post.dataPublicacao, post.author);
        post.id  = this.#nextId();
        this.items.push(post);
    }
    remove(member) {
        if (this.teamMembers.includes(member)) {
            throw new Error('Dados inválidos');
        }
        else {
            var idx = this.teamMembers.indexOf(member);
            this.teamMembers.splice(idx, 1);
        }
    }
    #assureNot(titulo, data, author) {
        if (!titulo || !data || !author) {
            throw new Error('Parâtros inválidos ou nulos');
        } 
        // if (!Post.isTituloOK(titulo) || !Post.isDataOK(data) || !Post.isAuthorOK(author)) {
        //     throw new Error('Parâtros inválidos');
        // }
        var other = this.#postByTitle(titulo);
        if (other) {
            throw new Error(`Titulo já existente.`);
        }
    }
    #nextId      = () => this.items.length + 1;
    #postById    = (value) => this.items.filter(x => x.id === value)[0];
    #postByTitle = (value) => this.items.filter(x => x.titulo === value)[0];

    serialize = () => JSON.stringify(this.items);
    static deserialize = (value) => JSON.parse(value);
}




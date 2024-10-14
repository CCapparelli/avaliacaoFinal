$(window).ready(function() {
    alert(`
Este alerta, apresentado apenas quando essa página é carregada, 
satisfaz um dos requerimentos propostos no enunciado da avaliação.

Clique na foto com flores vermelhas para acessar o Modal!`);
});

class TeamComposer {
    constructor(parent) {
        this.parent     = parent;
        this.section    = this.#addSection();
        }
    #addSection() {
        var classes = 'ourTeam container d-flex flex-column p-3 gap-5';
        var section = new Section('ourTeam', classes, this.parent);
        section.html(`
        <div class="ourTeamMember container d-flex gap-3 mb-3">
            <div class="ourTeamMemberLeft d-flex flex-row justify-content-around">
                <img class="memberImg rounded-2" src="../../../user/img/original/time/alice.jpg" alt="">
            </div>
            <div class="ourTeamMemberRight d-flex flex-column justify-content-center align-items-center">
                <h3 id="memberName" class="m-0 p-0 memberName">ALICE</h3>
                <p id="memberTitle" class="memberTitle p-0 m-0 fw-bold">Jornalista, bióloga e viajante</p>
                <p id="memberDesc" class="memberDesc p-0 m-0 small text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat tempore deserunt blanditiis pariatur velit delectus quam fuga soluta, doloribus repellat!</p>
            
                <h6 class="small fw-bold p-0 mt-3">TRABALHOS E PESQUISAS</h6>
                <div class="memberWorkImages d-flex flex-wrap justify-content-center gap-1">
                    <img class="memberWorkImg rounded-2" src="../../../user/img/cortado/natureza1.png" alt="">
                    <img class="memberWorkImg rounded-2" src="../../../user/img/cortado/natureza4.png" alt="">
                    <img class="memberWorkImg rounded-2 cHand" src="../../../user/img/cortado/natureza2.png" alt=""  data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img class="memberWorkImg rounded-2" src="../../../user/img/cortado/natureza3.png" alt="">
                </div>
            </div>
        </div>

        <div class="ourTeamMember d-flex flex-row-reverse gap-3">
            <div class="ourTeamMemberLeft d-flex flex-row justify-content-around">
                <img class=" memberImg rounded-2" src="../../../user/img/original/time/sergio.jpg" alt="">
            </div>
            <div class="ourTeamMemberRight d-flex flex-column justify-content-center align-items-center">
                <h3 id="memberName" class="m-0 p-0 memberName">SERGIO</h3>
                <p id="memberTitle" class="memberTitle p-0 m-0 fw-bold">Jornalista, estudante e programador</p>
                <p id="memberDesc" class="memberDesc p-0 m-0 small text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat tempore deserunt blanditiis pariatur velit delectus quam fuga soluta, doloribus repellat!</p>
            
                <h6 class="small fw-bold p-0 mt-3">TRABALHOS E PESQUISAS</h6>
                <div class="memberWorkImages d-flex flex-wrap justify-content-center gap-1">
                    <img class="memberWorkImg rounded-2" src="../../../user/img/none.png" alt="">
                    <img class="memberWorkImg rounded-2" src="../../../user/img/none.png" alt="">
                    <img class="memberWorkImg rounded-2" src="../../../user/img/none.png" alt="">
                    <img class="memberWorkImg rounded-2" src="../../../user/img/none.png" alt="">
                </div>
            </div>
        </div>

        <div class="ourTeamMember d-flex gap-3">
            <div class="ourTeamMemberLeft d-flex flex-row justify-content-around">
                <img class=" memberImg rounded-2" src="../../../user/img/original/time/elizabeth.jpg" alt="">
            </div>
            <div class="ourTeamRight d-flex flex-column justify-content-center align-items-center">
                <h3 id="memberName" class="m-0 p-0 memberName">ELIZABETH</h3>
                <p id="memberTitle" class="memberTitle p-0 m-0 fw-bold">Cientista e viajante</p>
                <p id="memberDesc" class="memberDesc p-0 m-0 small text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat tempore deserunt blanditiis pariatur velit delectus quam fuga soluta, doloribus repellat!</p>
            
                <h6 class="small fw-bold p-0 mt-3">TRABALHOS E PESQUISAS</h6>
                <div class="memberWorkImages d-flex flex-wrap justify-content-center gap-1">
                    <img class="memberWorkImg rounded-2" src="../../../user/img/none.png" alt="">
                    <img class="memberWorkImg rounded-2" src="../../../user/img/none.png" alt="">
                    <img class="memberWorkImg rounded-2" src="../../../user/img/none.png" alt="">
                    <img class="memberWorkImg rounded-2" src="../../../user/img/none.png" alt="">
                </div>
            </div>
        </div>`);
        return section;
    }    

}

class TeamPage extends Page {
    constructor() {
        super();
        this.headerComposer = new HeaderComposer(this.header);
        this.mainComposer   = new TeamComposer(this.main);
        this.themeToggler   = new ThemeToggler();
        this.modal          = this.#addModal();
    }
    #addModal() {
        // <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        var classes = 'modal fade';
        var attributes = ['tabindex=-1','aria-labelledby=exampleModalLabel','aria-hidden=true',];
        // var attributes = ['tabindex="-1"','aria-labelledby="exampleModalLabel"','aria-hidden="true"',];
        var modal = new HtmlTag('div','exampleModal', classes, attributes, body);
        modal.html(`
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header border-bottom-0 pb-0 mb-0">
                    <i class="fa fa-x w-100 text-end small cHand" data-bs-dismiss="modal" aria-label="Close" title="close"></i></p>
                </div>
                <div class="modal-body d-flex flex-column">
                    <div>
                        <img class="modalImage w-100 rounded-2" src="../../../user/img/cortado/natureza2.png" alt="">
                        <p class="fs-3 m-0 p-0">Fotos de belas flores!</p>
                        <p class="m-0 p-0" >Lorem</p>
                    </div>
                    <div class="mt-3 postInfo postAuthor postOK d-flex gap-3">
                        <img class="postAuthorImg" src="../../../user/img/original/time/alice.jpg" alt="">
                        <span>Posted by Alice</span>
                    </div>
                </div>
            </div>
        </div>`);
        return modal;
    }
}

const teamPage = new TeamPage();
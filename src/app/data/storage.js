class Storage {
    constructor() {
        this.team           = null;
        this.posts          = null;
        this.darkTheme      = null;
        this.currentPostId  = -1;
        
        this.darkThemeKey       = 'darkTheme';
        this.fakeTeamKey        = 'fakeTeam';
        this.fakePostsKey       = 'fakePosts';
        this.currentPostIdKey   = 'currentPostId';

        this.#initFakeData();
        this.#initTheme();
    }
    get teamMembers() { return this.team.teamMembers; }
    get postItems() { return this.posts.items; }

    set theme(value) {
        localStorage.setItem(this.darkThemeKey, value);
        this.darkTheme = localStorage.getItem(this.darkThemeKey);
    }
    setCurrentPost(id) {
        localStorage.setItem(this.currentPostIdKey, id);
        this.currentPostId = localStorage.getItem(this.currentPostIdKey);
    }
    toggleTheme() {
        this.darkTheme = !this.darkTheme;
        localStorage.setItem(this.darkThemeKey, JSON.stringify(this.darkTheme));
    }

    #initFakeData() {
        var stored = this.#getFakeTeam();
        if (!stored) {
            this.#initData();
        } 
        this.team  = this.#getFakeTeam();
        this.posts = this.#getFakePosts();
    }

    #initTheme() {
        var local = localStorage.getItem(this.darkThemeKey);
        if (!local) {
            localStorage.setItem(this.darkThemeKey, JSON.stringify(false));
        }
        this.darkTheme = JSON.parse(localStorage.getItem(this.darkThemeKey));
    }

    #initData() {
        var team = new Team();
        var posts = new Posts();
        
        var sergio  = new TeamMember('Sérgio', '/src/user/img/original/time/sergio.jpg');
        var alice   = new TeamMember('Alice', '/src/user/img/original/time/alice.jpg');
        var elisa   = new TeamMember('Elizabeth', '/src/user/img/original/time/elizabeth.jpg');
        var joao    = new TeamMember('João', '/src/user/img/network1.jpg');
        var maria   = new TeamMember('Maria', '/src/user/img/network2.jpg');
        var jose    = new TeamMember('José', '/src/user/img/network3.jpg');
        team.addRange([alice, sergio, elisa, joao, maria, jose]);
        
        var members = team.teamMembers;
        posts.add(new Post('Minha viagem ao Japão!', '10/10/2024', 'explore1.jpg', members[0]));
        posts.add(new Post('Primeiro post do Sérgio', '10/10/2024', 'explore2.jpg', members[1]));
        posts.add(new Post('Primeiro post de Elisabeth', '10/10/2024', 'explore3.jpg', members[2]));
        posts.add(new Post('Primeiro post do João', '10/10/2024', 'network1.jpg', members[3]));
        posts.add(new Post('Primeiro post de Maria', '10/10/2024', 'network2.jpg', members[4]));
        posts.add(new Post('Primeiro post do Zé', '10/10/2024', 'network3.jpg', members[5]));
        
        this.#setFakeTeam(team);
        this.#setFakePosts(posts);
    }
    
    #getFakeTeam = ()        => this.#read(this.fakeTeamKey);
    #setFakeTeam = (value)   => this.#write(this.fakeTeamKey, value);  

    #getFakePosts = ()        => this.#read(this.fakePostsKey);
    #setFakePosts = (value)   => this.#write(this.fakePostsKey, value);

    #read = (key) => JSON.parse(localStorage.getItem(key));
    #write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
}




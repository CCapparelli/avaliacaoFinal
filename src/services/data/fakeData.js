
function assureFakeData() {
    var stored = localStorage.getItem('fakeTeam');
    if (!stored) {
        var sergio  = new TeamMember('Sérgio', '/src/user/img/original/time/sergio.jpg');
        var alice   = new TeamMember('Alice', '/src/user/img/original/time/alice.jpg');
        var elisa   = new TeamMember('Elizabeth', '/src/user/img/original/time/elizabeth.jpg');
        var joao    = new TeamMember('João', '/src/user/img/network1.jpg');
        var maria   = new TeamMember('Maria', '/src/user/img/network2.jpg');
        var jose    = new TeamMember('José', '/src/user/img/network3.jpg');
        
        var team = new Team();
        team.add(sergio);
        team.add(alice);
        team.add(elisa);
        team.add(joao);
        team.add(maria);
        team.add(jose);
        // team.addRange(sergio, alice, elisa, joao, maria, jose);
        localStorage.setItem('fakeTeam', team.serialize());
        
        posts = new Posts();
        posts.add(new Post('Minha viagem ao Japão!', '10/10/2024', '/src/user/img/explore1.jpg', alice));
        posts.add(new Post('Rrimeiro post do Sérgio', '10/10/2024', '/src/user/img/explore1.jpg', sergio));
        posts.add(new Post('Rrimeiro post de Elisabeth', '10/10/2024', '/src/user/img/explore1.jpg', elisa));
        posts.add(new Post('Rrimeiro post do João', '10/10/2024', '/src/user/img/network1.jpg', joao));
        posts.add(new Post('Rrimeiro post de Maria', '10/10/2024', '/src/user/img/network2.jpg', maria));
        posts.add(new Post('Rrimeiro post do Zé', '10/10/2024', '/src/user/img/network3.jpg', jose));

        localStorage.setItem('fakePosts', posts.serialize());
    } 
}



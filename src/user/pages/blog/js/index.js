var posts = $('#posts');
var postItems = document.querySelectorAll('.post');

function applyTheme() {
    
    if (currentTheme() === 'dark') {
        posts.css('backgroundColor', 'rgb(80,80,80)'); 
        for (let element of postItems) {
            // element.sytle.backgroundColor = 'rgb(80,80,80)';
            element.css('backgroundColor','rgb(80,80,80)');
        }
        // postItems.forEach(element => {
        //     element.sytle.backgroundColor = 'lime';
        // });
        // postItems.each((_,val) => {
        //     val.sytle.backgroundColor = 'rgb(60,60,60)';
        //     // val.css('backgroundColor', 'rgb(60,60,60)'); 
        //     // val.attr('style', 'background-color: rgb(60,60,60);');
        // });
    } else {
        posts.css('backgroundColor', 'silver');
        for (let element of postItems) {
            // element.sytle.backgroundColor = 'white';
            element.css('backgroundColor','rgb(80,80,80)');
        }
    }
}
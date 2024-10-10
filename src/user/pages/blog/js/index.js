var posts = $('#posts');
var postItems = document.querySelectorAll('.post');

function applyTheme() {
    
    if (currentTheme() === 'dark') {
        posts.css('backgroundColor', 'rgb(80,80,80)'); 
        postItems.forEach(element => {
            element.sytle.backgroundColor = 'lime';
        });
        // postItems.each((_,val) => {
        //     val.sytle.backgroundColor = 'rgb(60,60,60)';
        //     // val.css('backgroundColor', 'rgb(60,60,60)'); 
        //     // val.attr('style', 'background-color: rgb(60,60,60);');
        // });
    } else {
        posts.css('backgroundColor', 'silver');
        postItems.forEach(element => {
            element.sytle.backgroundColor = 'pink';
        });
        // postItems.each((_,val) => {
        //     val.sytle.backgroundColor = 'white';
        //     // val.css('backgroundColor', 'white'); 
        //     // val.attr('style', 'background-color: white;');
        // });}
    }

// for (let el of postItems) 
//     el.style.backgroundColor = 'yellow';

}
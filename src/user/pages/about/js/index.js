$(window).ready(function() {
    alert(`
Este alerta, apresentado apenas quando essa página é carregada, 
satisfaz um dos requerimentos propostos no enunciado da avaliação.`);
});

var aboutUs = $('#aboutUs');

function applyTheme() {
    if (currentTheme() === 'dark') {
        aboutUs.css('backgroundColor', 'rgb(80,80,80)');
    } else {
        aboutUs.css('backgroundColor', 'silver');
    }
}
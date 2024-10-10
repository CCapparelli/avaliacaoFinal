var aboutUs = $('#aboutUs');

function applyTheme() {
    if (currentTheme() === 'dark') {
        aboutUs.css('backgroundColor', 'rgb(80,80,80)');
    } else {
        aboutUs.css('backgroundColor', 'silver');
    }
}
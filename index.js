function setLanguage(lang) {
    document.querySelectorAll('.lang').forEach(function(elem) {
        elem.classList.remove('active');
    });
    document.querySelectorAll('.' + lang).forEach(function(elem) {
        elem.classList.add('active');
    });
}
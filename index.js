function setLanguage(lang) {
    document.querySelectorAll('.lang').forEach(function(elem) {
        elem.classList.remove('active');
    });
    document.querySelectorAll('.' + lang).forEach(function(elem) {
        elem.classList.add('active');
    });
}
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  }
  
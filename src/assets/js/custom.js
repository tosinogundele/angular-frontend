
(function() {
    if (!sessionStorage.length) {
        // Ask other tabs for session storage
        localStorage.setItem('getSessionStorage', Date.now());
    };
    window.addEventListener('storage', function(event) {
        if (event.key == 'getSessionStorage') {
            localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
            localStorage.removeItem('sessionStorage');

        } else if (event.key == 'sessionStorage' && !sessionStorage.length) {
            var data = JSON.parse(event.newValue),
                        value;

            for (key in data) {
                sessionStorage.setItem(key, data[key]);
            }
        }
    });
    window.onbeforeunload = function() {
        //sessionStorage.clear();
    };

})();
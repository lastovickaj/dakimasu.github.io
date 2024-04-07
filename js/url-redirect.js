window.addEventListener("hashchange", function() {
    var newHash = window.location.hash;

    switch(newHash) {
        case "#about":
            this.window.location.href= "/about.html"
            break;
        case "#contact":
            this.window.location.href= "/contact.html"
            break;
        case "#project":
            this.window.location.href= "/project.html"
            break;
    }
});
window.addEventListener('load', function() {
    document.body.style.backgroundImage = "url('/assets/images/background/" + (Math.floor(Math.random() * 5) + 1) + ".png')";
    console.log('Finished loading!');
});
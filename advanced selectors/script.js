document.querySelector('.toggle').addEventListener('click', 
function(e) {
    if (document.fullscreenElement) {
        // if there is a fullscreen element, exit full screen
        document.exitFullscreen();
        return;
    }
    // make the .element div fullscreen
    document.querySelector('.element').requestFullscreen();
})
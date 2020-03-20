var btn = document.getElementById('top');
window.addEventListener("scroll", function(){
    var topY = window.pageYOffset;
    if (topY >= 62) {
        btn.style.position = 'fixed';
        btn.style.width = '398px';
        btn.style.bottom = '0px';
        btn.addEventListener('click', btnClick);
    }else{
        btn.removeAtstribute('style');
    }
});

function btnClick() {
    btn.removeAttribute('style');
    window.scrollTo(0,0);
}
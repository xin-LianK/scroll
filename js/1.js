window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;

    document.getElementById('box').onclick = function () {
        document.getElementById('box').style.top = '-900px';
    }
    if (t > 400) {
        document.getElementById('box').style.top = '-380px';
    } else if (t < 400) {
        document.getElementById('box').style.top = '-900px';
    }
}
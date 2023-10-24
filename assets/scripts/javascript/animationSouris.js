const mousemove = document.getElementById('mousemove');

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX;
    mousemove.style.top = e.pageY;
});

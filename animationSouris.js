const mousemove = document.getElementById('mousemove');

window.addEventListener("mousemove", (e) => {
    mousemove.style.left = (e.pageX + 1)+ "px";
    mousemove.style.top = e.pageY + "px";
});

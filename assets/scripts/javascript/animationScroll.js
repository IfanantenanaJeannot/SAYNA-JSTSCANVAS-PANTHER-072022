const boxes = document.querySelectorAll('.box');
const box1 = document.querySelectorAll('.box1');

window.addEventListener('scroll', checkboxes);
checkboxes();

function checkboxes(){
    const triggerBottom = window.innerHeight / 3*2;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else{
            box.classList.remove('show')
        }
    });
};

window.addEventListener('scroll', checkboxe);
checkboxe();

function checkboxe(){
    const triggerBottom = window.innerHeight / 3*2;

    box1.forEach((box1) => {
        const boxTop = box1.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box1.classList.add('show');
        } else{
            box1.classList.remove('show')
        }
    });
};
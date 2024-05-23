const box = document.querySelectorAll('.box');
const body = document.querySelector('body')
box.forEach((key) => {
    key.style.backgroundColor = key.innerHTML;
    key.style.color = 'black';
    key.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target.innerHTML);
        body.style.backgroundColor = e.target.innerHTML;
    });
})


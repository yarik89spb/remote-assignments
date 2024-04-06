// Update welcome text upon a click
let welcome = document.getElementById('greeting');
welcome.addEventListener('click', () => {
    welcome.textContent = "Have a Good Time!";
})
// show/hidd element upon a button click

let hideButton = document.getElementById('more');
let hiddenParagraph = document.querySelector('.hidden');
hideButton.addEventListener('click', () => {
    if(hiddenParagraph.style.display === 'none'){
        hiddenParagraph.style.display = 'flex';
        hiddenParagraph.scrollIntoView();
        hideButton.innerText = 'Show less';
        } else{
            hiddenParagraph.style.display = 'none';
            hideButton.innerText = 'Show more';
        }
}
)
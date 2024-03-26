const toggle = document.getElementById('toggle');
const body = document.querySelector('body')

/*toggle.addEventListener('click',setDark)*/
function setDark() {
    console.log("toggle button click")
    body.classList.toggle('darkmode');
}

const titleElement = document.getElementById("title");
console.log("titleElement", titleElement);
localStorage.getItem("title");
const title = localStorage.getItem ("title"); 
console.log("title", title)

if (title) {
    titleElement.innerHTML = title;
}

// what to make the sun change the page from dark to light mode
const toggle = document.getElementById('toggle');
const body = document.querySelector('body')

function setDark() {
    console.log ("toggle button click")
    body.classList.toggle('darkmode');
}
 

const title = document.getElementById('title');
const name = document.getElementById('name');
const content = document.getElementById('content');
const button = document.getElementById('button')
// make button sumbit to next page
button.addEventListener( "click" , (event) => {
    console.log("title has changed")
    const blog ={ title: title.value , name: name.value , content: content.value 
    }
    const storage=JSON.parse(localStorage.getItem("blogs")) || []
   storage.push(blog)
    console.log(event.target.value)
     // write code to save to local stora
localStorage.setItem("blogs" , JSON.stringify(storage))
window.location="blog.html"
}
)


// //make img change colors when clicked 
// switchCol.addEventListener('lcick', function(vent)
// {const checked = event.target.dataset.color;
//     if (checked==="light"){
//         document.querySelector('.darkspan').computedStyleMap.displsy="none";
//         document.querySelector('.lightspan').computedStyleMap.displsy="block";
//         event.target.dataset.color="dark";


        


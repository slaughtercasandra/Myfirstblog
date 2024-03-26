
const toggle = document.getElementById('toggle');
const body = document.querySelector('body')

function setDark() {
    console.log ("toggle button click")
    body.classList.toggle('darkmode');
}


// add event listeners to the on change event


// create a function 
// const onchange = (event) => {

// } // this function is acting as an event listener

// when a user changes the input field, the title will change



 
const title = document.getElementById('title');
const name = document.getElementById('name');
const content = document.getElementById('content');
const button = document.getElementById('button')

button.addEventListener( "click" , (event) => {
    console.log("title has changed")
    const blog ={ title: title.value , name:name.value , content:content.value 
    }
    const storage=JSON.parse(localStorage.getItem("blogs")) || []
   storage.push(blog)
    console.log(event.target.value)
     // write code to save to local stora
localStorage.setItem("blogs" , JSON.stringify(storage))
window.location="blog.html"
}

)


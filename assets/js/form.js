//Retrieve projects from localStorage and parse the JSON to an array. If there are no projects in localStorage, initialize an empty array and return it.



const storage=JSON.parse(localStorage.getItem("blogs")) || []
console.log(storage);
for (let i=0; i<storage.length;i++) {
    const blog=storage[i]
const container=document.createElement("div")
container.classList.add("box")
// match the element tags 

const title=document.createElement("h2")
title.classList.add("title")
title.innerText=blog.title
container.appendChild(title)




const content=document.createElement("p")
title.classList.add("content")
content.innerText=blog.content
container.appendChild(content)




const name=document.createElement("small")
title.classList.add("name")
name.innerText=blog.name
container.appendChild(name)
document.getElementById("blog").appendChild(container)
}




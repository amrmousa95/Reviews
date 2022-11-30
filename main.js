let reviews = [
    {
        src:"1.jpeg",
        "name":"Nora Nora",
        "title":"back end developer"
    },
    {
        src:"2.jpg",
        "name":"mohamed ali",
        "title":"back end developer"
    },
    {
        src:"3.jpg",
        "name":"Nora Nora",
        "title":"software engineer"
    },
    {
        src:"4.jpg",
        "name":"ahmed mohamed",
        "title":"data analyst"
    }
]


let xname = document.getElementById("name")
let title = document.getElementById("title")
let image = document.getElementById("image");
let btnLeft = document.getElementById("btn-left")
let btnRight = document.getElementById("btn-right")
image.src = reviews[1].src;

let current = 0
// initial content
window.addEventListener("DOMContentLoaded", function(){
    showPerson()
}) 
function showPerson(){
    image.src = reviews[current].src
    xname.innerText = reviews[current].name
    title.innerText = reviews[current].title
}
btnLeft.addEventListener("click",function(){
        current++
        if(current > reviews.length-1)
        {
            current = 0
        }
        showPerson()        
})
btnRight.addEventListener("click",function(){
    current--
    if(current < 0)
    {
        current =reviews.length-1
    }
    showPerson()        
})


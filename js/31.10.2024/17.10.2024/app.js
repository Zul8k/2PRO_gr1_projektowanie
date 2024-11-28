const body = document.querySelector("body")


const div = document.createElement("div")
body.appendChild(div)

div.style.height="400px"
div.style.width="400px"
div.style.backgroundColor="pink"
div.setAttribute("id", "testowy")



const inp0 = document.createElement("input")
body.appendChild(inp0)

inp0.setAttribute("type", "button")
inp0.setAttribute("id", "inp0")
inp0.setAttribute("value", "RED")
inp0.setAttribute("onclick", "rColor()")

function rColor(){
    div.style.backgroundColor = "red"
}


const inp1 = document.createElement("input")
body.appendChild(inp1)

inp1.setAttribute("type", "button")
inp1.setAttribute("id", "inp1")
inp1.setAttribute("value", "BLUE")
inp1.setAttribute("onclick", "bColor()")

function bColor(){
    div.style.backgroundColor = "blue"
}








const div1 = document.createElement("div")
body.appendChild(div1)

div1.style.height = "300px"
div1.style.width = "500px"

div1.setAttribute("id", "div1")


const btn0 = document.createElement("input")
body.appendChild(btn0)

btn0.setAttribute("type", "button")
btn0.setAttribute("id", "btn0")
btn0.setAttribute("value", "+1")
btn0.setAttribute("onclick", "sum()")

const par = document.createElement("p")
div1.appendChild(par)

let num = 0;

function sum(){
    num++
    par.innerHTML = num
}





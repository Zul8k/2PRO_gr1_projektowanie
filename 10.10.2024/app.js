const body = document.querySelector("body")

const div = document.createElement("div")

body.appendChild(div)

div.style.width = "500px"
div.style.height = "500px"
div.style.border = "1px solid black"


div.setAttribute("id", "testowe")

// const button1 = document.createElement("button")
// const button2 = document.createElement("button")

// body.appendChild(button1)
// body.appendChild(button2)


// button1.setAttribute("onclick", "przycisk1()")
// button2.setAttribute("onclick", "przycisk2()")

// function przycisk1(){
//     div.style.backgroundColor = "blue"
// }

// function przycisk2(){
//     div.style.backgroundColor = "green"
// }

const inp0 = document.createElement("input")

body.appendChild(inp0)

inp0.setAttribute("type", "color")
inp0.setAttribute("id", "inp0")


const button3 = document.createElement("button")
body.appendChild(button3)
button3.setAttribute("onclick", "input0()")

const inp1 = document.createElement("input")
inp1.setAttribute("id", "inp1")
inp1.setAttribute("type", "text")
div.appendChild(inp1)

const button4 = document.createElement("button")
button4.setAttribute("onclick", "input1()")
button4.setAttribute("id", "button4")
div.appendChild(button4)


function input0(){
    inpCol = document.getElementById("inp0").value
    div.style.backgroundColor = inpCol
}

function input1(){
//    let txt = document.getElementById("inp1").value
//     par1.innerText = txt
    const par1 = document.createElement("p")
    par1.innerHTML = inp1.value;
    div.appendChild(par1)
}



const inp2 = document.createElement("input")
inp2.setAttribute("type", "text")
inp2.setAttribute("id", "inp2")
body.appendChild(inp2)

const button5 = document.createElement("input")
button5.setAttribute("type", "button")
button5.setAttribute("id", "button5")
button5.setAttribute("value", "click!")
button5.setAttribute("onclick", "input2()")
body.appendChild(button5)

const ol = document.createElement("ol")
body.appendChild(ol)

function input2(){

    const li = document.createElement("li")
    li.innerHTML = inp2.value
    ol.appendChild(li)
    const fctbutton0 = document.createElement("input")
    fctbutton0.setAttribute("type", "button")
    fctbutton0.setAttribute("id", "fctbutton0")
    fctbutton0.setAttribute("value", "DELETE")
    fctbutton0.addEventListener("click", function(){
        ol.removeChild(li)
    })
    li.appendChild(fctbutton0)
}





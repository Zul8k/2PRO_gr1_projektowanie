let body = document.querySelector("body")
body.style.backgroundColor = "#272424"

let mainDiv = document.createElement("div")
mainDiv.setAttribute("id", "mainDiv")
body.appendChild(mainDiv)
mainDiv.style.height = "100px"
mainDiv.style.width = "auto"
mainDiv.style.margin = "0"


let pktDiv = document.createElement("div")
body.appendChild(pktDiv)
pktDiv.style.backgroundColor = "201d1d"
pktDiv.style.height = "200px"
pktDiv.style.color = "white"
pktDiv.style.borderRadius = "30px"
pktDiv.style.border = "2px white solid"

// pktDiv.style.display = "flex"
// pktDiv.style.justifyContent = "center"


let OdpH1 = document.createElement("h1")
pktDiv.appendChild(OdpH1)
OdpH1.setAttribute("id", "odpH1")
// mainH1.setAttribute("display", "flex")
// mainH1.style.display = "flex"
// mainH1.style.justifyContent = "center"
OdpH1.innerHTML = "Punktacja"

let par0 = document.createElement("p")
pktDiv.appendChild(par0)
par0.innerHTML = "Poprawne: 0"  

let par1 = document.createElement("p")
pktDiv.appendChild(par1)
par1.innerHTML = "Niepoprawne: 0" 

let par2 = document.createElement("p")
pktDiv.appendChild(par2)
par2.innerHTML = "Pozostało złych odpowiedzi: 5"

let guessDiv = document.createElement("div")
guessDiv.setAttribute("id", "guessDiv")
body.appendChild(guessDiv)
guessDiv.style.height = "600px"
guessDiv.style.background = "green"
guessDiv.style.width = "40vw"
guessDiv.style.margin = "0"
guessDiv.style.display = "flex"
guessDiv.style.justifySelf = "center"
guessDiv.style.justifyContent = "center"
guessDiv.style.wrap = "wrap"
guessDiv.style.borderRadius = "30px"




// let mainH1 = document.createElement("h1")
// mainDiv.appendChild(mainH1)
// mainH1.setAttribute("id", "mainH1")
// mainH1.setAttribute("display", "flex")
// mainH1.style.display = "flex"
// mainH1.style.justifyContent = "center"
// mainH1.innerHTML = "Europa"

// let Flaga = document.createElement("div")
// Flaga.setAttribute("id", "flaga")
// guessDiv.appendChild(Flaga)
// Flaga.style.height = "300px"
// Flaga.style.width = "100%"

// let Nazwa = document.createElement("div")
// Nazwa.setAttribute("id", "divNazwa")
// guessDiv.appendChild(Nazwa)
// Nazwa.style.height = "300px"
// Nazwa.style.width = "100%"
// Nazwa.style.float = "end"

// let NazwaK = document.createElement("h2")
// Flaga.setAttribute("id", "NazwaK")
// Nazwa.appendChild(NazwaK)
// NazwaK.innerHTML = "Nazwa"


let Guess = document.createElement("div")
body.appendChild(Guess)
Guess.setAttribute("id", "Guess")
Guess.style.display = "flex"
Guess.style.backgroundColor = "Grey"
Guess.style.height = "100px"
Guess.style.justifyContent ="center"
Guess.style.alignItems="center"
Guess.style.borderRadius = "30px"
Guess.style.border = "2px white solid"


let inp0 = document.createElement("input")
inp0.setAttribute("id", "input0")
Guess.appendChild(inp0)
inp0.setAttribute("type", "text")
inp0.style.height = "40%"
inp0.style.margin = "25px"

let btn0 = document.createElement("button")
btn0.setAttribute("id", "btn0")
Guess.appendChild(btn0)
btn0.setAttribute("type", "button")
btn0.setAttribute("onclick", "check()")
// btn0.setAttribute("value", "")
btn0.textContent = "Sprawdź"




async function getData(){
    const data = await fetch("https://restcountries.com/v3.1/region/europe")
    const json = await data.json()

    await console.log(json);

    return json
    // let dataText = await data.text()
 
}

getData()


let flaga = document.createElement("img")
guessDiv.appendChild(flaga)
flaga.style.width = "auto"
flaga.style.height = "50%"

let par3 = document.createElement("p")
guessDiv.appendChild(par3)
par3.innerHTML = "Nazwa"
par3.setAttribute("id", "par3")


let Poprawnaodp = 0;
let Niepoprawnaodp = -1;
let Pozostale = 6;

let odpowiedz = document.getElementById("input0").value

async function check(){


    const kraj = await getData()
    let random = Math.floor(Math.random()*53)
    par3.innerHTML =  kraj[random].name.common
    flaga.setAttribute("src",  kraj[random].flags.png)
    let stolica = kraj[random].capital
    console.log(stolica);

    console.log(odpowiedz);
    if(odpowiedz == stolica){
        Poprawnaodp = Poprawnaodp+1
        par0.innerHTML = "Poprawne: " + Poprawnaodp
    }
    else if(odpowiedz!=stolica ){
        Niepoprawnaodp=Niepoprawnaodp+1
        par1.innerHTML = "Niepoprawne: " + Niepoprawnaodp
        Pozostale--
        par2.innerHTML = "Pozostało złych odpowiedzi: "+ Pozostale
    }   
    else if (Pozostale < 0){
        par2.innerHTML = "Koniec gry"
    }
}
check()




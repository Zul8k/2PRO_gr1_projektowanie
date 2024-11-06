let body = document.querySelector("body")
// body.style.backgroundColor = "#272424"
body.classList.add("white")
body.style.minHeight = "100vh"
body.style.margin = "0"


let mainDiv = document.createElement("div")
mainDiv.setAttribute("id", "mainDiv")
body.appendChild(mainDiv)
mainDiv.style.height = "100px"
mainDiv.style.width = "auto"
mainDiv.style.margin = "0"


var pktDiv = document.createElement("div")
body.appendChild(pktDiv)
pktDiv.classList.add("gradient")
pktDiv.classList.add("whiteDiv")
pktDiv.style.height = "200px"
pktDiv.style.width = "400px"
pktDiv.style.flexWrap = "wrap"
// pktDiv.style.color = "white"
pktDiv.style.borderRadius = "30px"
// pktDiv.style.border = "5px black solid"
pktDiv.style.display = "flex"
pktDiv.style.justifyContent = "center"
pktDiv.style.justifySelf = "center"
pktDiv.style.alignContent = "center"
pktDiv.style.margin = "5px"


// let OdpH1 = document.createElement("h1")
// pktDiv.appendChild(OdpH1)
// OdpH1.setAttribute("id", "odpH1")
// OdpH1.style.width = "100%"
// OdpH1.style.textAlign = "center"
// // mainH1.setAttribute("display", "flex")
// // mainH1.style.display = "flex"
// // mainH1.style.justifyContent = "center"
// OdpH1.innerHTML = "Punktacja"

// let par0 = document.createElement("p")
// pktDiv.appendChild(par0)
// par0.innerHTML = "Poprawne: 0"  

// let par1 = document.createElement("p")
// pktDiv.appendChild(par1)
// par1.innerHTML = "Niepoprawne: 0" 

// let par2 = document.createElement("p")
// pktDiv.appendChild(par2)
// par2.innerHTML = "Pozostało złych odpowiedzi: 5"

var guessDiv = document.createElement("div")
guessDiv.setAttribute("id", "guessDiv")
body.appendChild(guessDiv)
guessDiv.style.height = "400px"
guessDiv.style.background = "#006D77"
guessDiv.style.border = "4px solid #00565E"
guessDiv.style.width = "400px"
guessDiv.style.margin = "0"
guessDiv.style.display = "flex"
guessDiv.style.justifySelf = "center"
guessDiv.style.justifyContent = "center"
guessDiv.style.flexwrap = "wrap"
guessDiv.style.borderRadius = "30px"

// display: flex;
// justify-content: center;
// flex-wrap: wrap;
// text-align: center;





var Guess = document.createElement("div")
body.appendChild(Guess)
Guess.classList.add("whiteDiv")
Guess.setAttribute("id", "Guess")
Guess.classList.add("gradient")
Guess.style.display = "flex"
// Guess.style.backgroundColor = "Grey"
Guess.style.height = "100px"
Guess.style.width = "400px"
Guess.style.margin = "30px"
Guess.style.justifySelf = "center"
Guess.style.justifyContent ="center"
Guess.style.alignItems="center"
Guess.style.borderRadius = "30px"
// Guess.style.border = "2px black solid"


var inp0 = document.createElement("input")
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
btn0.style.borderRadius = "5px"
btn0.style.height = "30%"
btn0.style.width = "70px"
btn0.style.font
btn0.textContent = "Sprawdź"




async function getData(){
    const data = await fetch("https://restcountries.com/v3.1/region/europe")
    const json = await data.json()

    console.log(json);

    return json
    // let dataText = await data.text()
 
}

getData()


// let flaga = document.createElement("img")
// guessDiv.appendChild(flaga)
// flaga.style.width = "auto"
// flaga.style.height = "50%"

// let par3 = document.createElement("p")
// guessDiv.appendChild(par3)
// par3.innerHTML = "Nazwa"
// par3.setAttribute("id", "par3")


// let Poprawnaodp = 0;
// let Niepoprawnaodp = -1;
// let Pozostale = 6;

// let odpowiedz = document.getElementById("input0").value

// async function check(){


//     const kraj = await getData()
//     let random = Math.floor(Math.random()*53)
//     par3.innerHTML =  kraj[random].name.common
//     flaga.setAttribute("src",  kraj[random].flags.png)
//     let stolica = kraj[random].capital
//     console.log(stolica);

//     console.log(odpowiedz);
//     if(odpowiedz == stolica){
//         Poprawnaodp = Poprawnaodp+1
//         par0.innerHTML = "Poprawne: " + Poprawnaodp
//     }
//     else if(odpowiedz!=stolica ){
//         Niepoprawnaodp=Niepoprawnaodp+1
//         par1.innerHTML = "Niepoprawne: " + Niepoprawnaodp
//         Pozostale--
//         par2.innerHTML = "Pozostało złych odpowiedzi: "+ Pozostale
//     }   
//     else if (Pozostale < 0){
//         par2.innerHTML = "Koniec gry"
//     }
// }
// check()




//====================================================================================================


let punktpop = 0;
let punktnie = 0;

let flaga = document.createElement("img")
guessDiv.appendChild(flaga)
flaga.style.width = "auto"
flaga.style.height = "50%"

const h2 = document.createElement("h2");
h2.style.fontSize = "250%";
h2.style.display = "flex"
// h2.style.justifySelf = "flexend"

const pktacja = document.createElement("ul");
pktacja.style.fontSize = "200%"
pktacja.style.fontWeight = "900"
pktacja.textContent = "Punktacja";

const pop = document.createElement("li");
pop.textContent = "Poprawne: " + punktpop;

const niepop = document.createElement("li");
niepop.textContent = "Niepoprawne: " + punktnie;

pktDiv.appendChild(pktacja)
pktacja.appendChild(pop);
pktacja.appendChild(niepop);


async function check() {
    const kraj = await getData();
    let random = Math.floor(Math.random() * kraj.length);

    if (kraj[random].capital) { 
        if (kraj[random].capital[0]) { 
            capital = kraj[random].capital[0].toLowerCase(); 
        }
    }
    
    // div.innerHTML = "";  
    flaga.setAttribute("src", kraj[random].flags.png);
    guessDiv.appendChild(flaga);

    h2.textContent = kraj[random].name.common;
    guessDiv.appendChild(h2);
}

function odp() {
    let stolica = inp0.value.trim().toLowerCase(); 
    
    if (stolica == capital) {
        punktpop += 1;
        pop.textContent = "Poprawne: " + punktpop;
    } else if(stolica == ""){
        alert("Wpisz stolicę.")
    }else{
        punktnie += 1;
        niepop.textContent = "Niepoprawne: " + punktnie;
    }

    // inp0.value = "";  

    if (punktnie == 5) {
        const koniec = document.createElement("h1");
        koniec.textContent = "Przegrałeś! Uzyskałeś 5 niepoprawnych odpowiedzi.";
        
        const reset = document.createElement("button");
        reset.textContent = "Zacznij od nowa";
        reset.style.width = "400px";
        reset.style.height = "30px";
        reset.style.margin = "auto";
        reset.setAttribute("onclick", "window.location.reload()");
        body.appendChild(koniec);
        body.appendChild(reset);

        btn0.disabled = true;  
    } //else {
    //     check();  
    // }
}

btn0.addEventListener("click", odp);
check();


//============================================================================================================


var tglMode = document.createElement("button")
body.appendChild(tglMode)
tglMode.textContent = "dark"
tglMode.setAttribute("onclick", "toggleMode()")
tglMode.setAttribute("id", "tryb")
tglMode.style.borderRadius = "20px"
tglMode.style.height = "70px"
tglMode.style.width = "100px"
tglMode.style.fontWeight = "900"
tglMode.style.fontSize = "150%"


function toggleMode(){
    let tryb = document.getElementById("tryb").textContent
    let body = document.querySelector("body")
    if(tryb=="dark"){
        body.classList.remove("white")
        body.classList.add("black")

        pktDiv.classList.remove("whiteDiv")
        pktDiv.classList.add("blackDiv")

        Guess.classList.remove("whiteDiv")
        Guess.classList.add("blackDiv")

        tglMode.classList.remove("blackDiv")
        tglMode.classList.add("whiteDiv")

        mainDiv.classList.remove("mainwDiv")
        mainDiv.classList.add("mainbDiv")


        tglMode.textContent = "white"

    }else if(tryb == "white"){
        body.classList.remove("black")
        body.classList.add("white")

        pktDiv.classList.remove("blackDiv")
        pktDiv.classList.add("whiteDiv")

        Guess.classList.remove("blackDiv")
        Guess.classList.add("whiteDiv")

        tglMode.classList.remove("whiteDiv")
        tglMode.classList.add("blackDiv")

        mainDiv.classList.remove("mainbDiv")
        mainDiv.classList.add("mainwDiv")

        tglMode.textContent = "dark"
    }
}




// let moonCheck = document.getElementById("tglMoon")
// console.log(moonCheck.value);

// function darkmode(){
//     let moonCheck = document.getElementById("tglMoon")
// console.log(moonCheck);

// }
let body = document.querySelector("body")

async function getData(){
    const data = await fetch("https://restcountries.com/v3.1/region/europe")
    const json = await data.json()

    console.log(json);

    return json
}

getData()

let Maintxt = document.createElement("h1")
body.appendChild(Maintxt)
Maintxt.textContent = "Population"
Maintxt.setAttribute("id", "Maintxt")

let Div_punkty = document.createElement("div")
body.appendChild(Div_punkty)
Div_punkty.setAttribute("id","DivPunkty")
Div_punkty.classList.add("Divy")

let h2 = document.createElement("h2")
Div_punkty.appendChild(h2)
h2.setAttribute("id","h2_1")
h2.textContent = "Points:"
h2.classList.add("napis")

let poprawne_h3 = document.createElement("h3")
Div_punkty.appendChild(poprawne_h3)
poprawne_h3.setAttribute("id", "poprawne_h3")
poprawne_h3.textContent = "Correct: "
poprawne_h3.classList.add("napis")

let niePoprawne_h3 = document.createElement("h3")
Div_punkty.appendChild(niePoprawne_h3)
niePoprawne_h3.setAttribute("id", "niePoprawne_h3")
niePoprawne_h3.textContent = "Incorrect: "
niePoprawne_h3.classList.add("napis")

let Div_naFlagi = document.createElement("div")
body.appendChild(Div_naFlagi)
Div_naFlagi.setAttribute("id", "DivNaFlagi")

let Div_Guess1 = document.createElement("div")
Div_naFlagi.appendChild(Div_Guess1)
Div_Guess1.setAttribute("id", "DivGuess1")
Div_Guess1.classList.add("GuessDiv")

let flaga1 = document.createElement("img")
Div_Guess1.appendChild(flaga1)
flaga1.classList.add("flaga")

let nazwa1 = document.createElement("p")
Div_Guess1.appendChild(nazwa1)
nazwa1.classList.add("par")

// let button1 = document.createElement("button")
// Div_Guess1.appendChild(button1)
// button1.setAttribute("id", "button1")
// button1.classList.add("przycisk")

let BetDiv = document.createElement("div")
Div_naFlagi.appendChild(BetDiv)
BetDiv.setAttribute("id", "BetDiv")
BetDiv.classList.add("GuessDiv")

let Par_Bet = document.createElement("p")
BetDiv.appendChild(Par_Bet)
Par_Bet.setAttribute("id","Par_Bet")
Par_Bet.classList.add("napis")
Par_Bet.textContent = "Which country has bigger population?"

let btn_left = document.createElement("button")
BetDiv.appendChild(btn_left)
btn_left.setAttribute("id", "btn_left")
btn_left.classList.add("pick")
btn_left.textContent = "<"

let btn_right = document.createElement("button")
BetDiv.appendChild(btn_right)
btn_right.setAttribute("id", "btn_right")
btn_right.classList.add("pick")
btn_right.textContent = ">"

let Div_Guess2 = document.createElement("div")
Div_naFlagi.appendChild(Div_Guess2)
Div_Guess2.setAttribute("id", "DivGuess2")
Div_Guess2.classList.add("GuessDiv")

let flaga2 = document.createElement("img")
Div_Guess2.appendChild(flaga2)
flaga2.classList.add("flaga")

let nazwa2 = document.createElement("p")
Div_Guess2.appendChild(nazwa2)
nazwa2.classList.add("par")

// let button2 = document.createElement("button")
// Div_Guess2.appendChild(button2)
// button2.setAttribute("id", "button2")
// button2.classList.add("przycisk")

//KOLORY

//042A2B
//5EB1BF
//CDEDF6
//EF7B45
//D84727

//7CB4B8


/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

async function random(){
    let data = await getData();
    let losowa1 = Math.floor(Math.random()*53)
    console.log(losowa1);
    let losowa2 = Math.floor(Math.random()*53)
    console.log(losowa2);

    flaga1.setAttribute("src", data[losowa1].flags.png)
    nazwa1.textContent = data[losowa1].name.common
    // button1.textContent = data[losowa1].name.common+ " have bigger population"

    flaga2.setAttribute("src", data[losowa2].flags.png)
    nazwa2.textContent = data[losowa2].name.common
    // button2.textContent = data[losowa2].name.common+ " have bigger population"

}
random()









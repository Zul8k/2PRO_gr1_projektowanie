let body = document.querySelector("body")
let poprawne = 0
let niepoprawne = 0


async function getData(){
    const data = await fetch("https://restcountries.com/v3.1/region/europe")
    const json = await data.json()

    console.log(json);

    return json
}

getData()

async function przypisz() {
    dane = await getData()
    return dane;
}

przypisz()

// let start = document.createElement("button")
// body.appendChild(start)
// start.textContent = "start"
// start.setAttribute("onclick", "start1()")

// function start1(){

    // body.removeChild(start)
// body.removeChild(*)

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
poprawne_h3.textContent = "Correct: 0"
poprawne_h3.classList.add("napis")

let niePoprawne_h3 = document.createElement("h3")
Div_punkty.appendChild(niePoprawne_h3)
niePoprawne_h3.setAttribute("id", "niePoprawne_h3")
niePoprawne_h3.textContent = "Incorrect: 0"
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
btn_left.classList.add("btn_left")
btn_left.textContent = "<"
btn_left.setAttribute("onclick", "left()")

let btn_right = document.createElement("button")
BetDiv.appendChild(btn_right)
btn_right.setAttribute("id", "btn_right")
btn_right.classList.add("btn_right")
btn_right.textContent = ">"
btn_right.setAttribute("onclick", "right()")

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

let odp1 = document.createElement("h2")
Div_Guess1.appendChild(odp1)

let odp2 = document.createElement("h2")
Div_Guess2.appendChild(odp2)



let dane = [];
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
    losowa1 = Math.floor(Math.random()*53)
    console.log(losowa1);
    losowa2 = Math.floor(Math.random()*53)
    console.log(losowa2);

    flaga1.setAttribute("src", dane[losowa1].flags.png)
    nazwa1.textContent = dane[losowa1].name.common
    // button1.textContent = data[losowa1].name.common+ " have bigger population"

    flaga2.setAttribute("src", dane[losowa2].flags.png)
    nazwa2.textContent = dane[losowa2].name.common
    // button2.textContent = data[losowa2].name.common+ " have bigger population"

    if(losowa1 == losowa2){
        random()
    }

}
random()


function left(){
    let danee = dane
    if(danee[losowa1].population>danee[losowa2].population){
        poprawne++;
        btn_right.classList.remove("correct")
        btn_right.classList.remove("wrong")
        btn_left.classList.remove("correct")
        btn_left.classList.remove("wrong")
        odp1.textContent = `${danee[losowa1].name.common} population equals: ${danee[losowa1].population} and is bigger than ${danee[losowa2].name.common}'s`
        odp2.textContent = ""
        random()
        poprawne_h3.innerHTML = `Correct: ${poprawne}`
        niePoprawne_h3.innerHTML = `Incorrect:  ${niepoprawne}`
        btn_left.classList.add("correct")
    }
    else if(danee[losowa1].population<danee[losowa2].population){
        niepoprawne++;
        btn_right.classList.remove("correct")
        btn_right.classList.remove("wrong")
        btn_left.classList.remove("correct")
        btn_left.classList.remove("wrong")
        odp1.textContent = `${danee[losowa1].name.common} population equals: ${danee[losowa1].population} and is smaller than ${danee[losowa2].name.common}'s`
        odp2.textContent = ""
        random()
        poprawne_h3.innerHTML = `Correct: ${poprawne}`
        niePoprawne_h3.innerHTML = `Incorrect: ${niepoprawne}`
        btn_left.classList.add("wrong")
    }
}

// setTimeout(left, 500)

function right(){
    let danee = dane
    if(danee[losowa2].population>danee[losowa1].population){
        poprawne++;
        btn_left.classList.remove("correct")
        btn_left.classList.remove("wrong")
        btn_right.classList.remove("correct")
        btn_right.classList.remove("wrong")
        odp2.innerHTML = `${danee[losowa2].name.common} population equals: ${danee[losowa2].population} and is bigger than ${danee[losowa1].name.common}'s`
        odp1.innerHTML = ""
        random()
        poprawne_h3.innerHTML =`Correct: ${poprawne}`
        niePoprawne_h3.innerHTML = `Incorrect: ${niepoprawne}`
        btn_right.classList.add("correct")
    }
    else if(danee[losowa2].population<danee[losowa1].population){
        niepoprawne++;
        btn_left.classList.remove("correct")
        btn_left.classList.remove("wrong")
        btn_right.classList.remove("correct")
        btn_right.classList.remove("wrong")
        odp2.innerHTML = `${danee[losowa2].name.common} population equals: ${danee[losowa2].population} and is smaller than ${danee[losowa1].name.common}'s`
        odp1.innerHTML = ""
        random()
        poprawne_h3.innerHTML = `Correct: ${poprawne}`
        niePoprawne_h3.innerHTML = `Incorrect: ${niepoprawne}`
        btn_right.classList.add("wrong")
    }
}
// }
// setTimeout(right, 500)

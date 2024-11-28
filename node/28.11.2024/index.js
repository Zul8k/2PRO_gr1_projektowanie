const express = require("express")

const app = express()

app.get("/", (req, res)=>{
    console.log(req);
    res.send("<h1>Julian Kosobudzki<h1>")
})
app.get("/:imie/:nazwisko", (req, res)=>{
    const imie = req.params.imie
    const nazwisko = req.params.nazwisko
    res.send(imie+ " "+ nazwisko)
})
app.get("/:liczba1/liczba2", (req,res)=>{
    let liczba1 = req.params.liczba1
    let liczba2 = req.params.liczba2
    let wynik = liczba1+liczba2
    res.send(wynik)
})
app.listen(3000, ()=>{
    console.log("Aplikacja działa.");
})
const valasztas = document.getElementById("sheet-content")

const kivalasztoGombok = document.getElementsByTagName("button")
const karakterNevek = document.getElementsByClassName("char-name")
const eletErok = document.getElementsByClassName("char-hp")

for (let i = 0; i < kivalasztoGombok.length; i++) {
    console.log(`Karakternév: ${karakterNevek[i].textContent}, Életerő: ${eletErok[i].textContent}`)

    kivalasztoGombok[i].addEventListener("click", function(){
        valasztas.innerHTML = `<h3>${karakterNevek[i].textContent}</h3>`
    })
}
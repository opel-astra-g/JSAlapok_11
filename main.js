document.getElementById("focim").textContent = "Mátrix rendszer"

let statuszElemek = document.getElementsByClassName("statusz-szoveg")

console.log(statuszElemek.length)


document.getElementsByClassName("lista-elem")[0].textContent = "Rendszer ellenőrzése folyamatban..."

document.getElementsByClassName("lista-elem")[1].textContent = "Kapcsolódás a hálózathoz..."

let listaElemek = document.querySelectorAll(".lista-elem")

console.log(listaElemek[0])

listaElemek[1].textContent = "Szerver állapot: ONLINE"

let nevInput = document.querySelector("#jatekos-nev-input")

let inditoGomb = document.querySelector("#indito-gomb")

let eredmenyDiv = document.getElementById("eredmeny")

inditoGomb.addEventListener("click", function(){
    let gombSzovege = inditoGomb.textContent
    let jatekosNev = nevInput.value

    eredmenyDiv.textContent = `Üdvözlünk ${jatekosNev}! Végrehajtott akció: ${gombSzovege}`
})
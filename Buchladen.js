class Buch {
    Verlag
    Titel
    Autor
    Preis
    verfugbar=50
    verkauft
    constructor(Verlag, Titel, Autor, Preis ) {
        this.Autor = Autor
        this.Preis = Preis
        this.Verlag= Verlag
        this.Titel = Titel

    }
    verfugbar(){
        document.getElementById("Anzahl").innerHTML = "Es sind " + this.verfugbar + " Bücher noch vorhanden! "
    }
    verkauft(){
        this.verfugbar = -1

    }
}

let lager = []

function init() {

    let  Mathematik = new Buch("HamburgerVerlag", "MA 11","Gruppe A", "29,78")
    let  Biologie = new Buch("ThüringerVerlag", "BIO 11", "Gruppe B", "19,99")
    let  Informatik = new Buch("HamburgerVerlag", "INFO 11","Gruppe AC", "18,78")
    let  Geschichte = new Buch("HamburgerVerlag", "GE 11","Gruppe D", "17,78")
    let  Deutsch = new Buch("HamburgerVerlag", "DE 11","Gruppe E", "12,78")

    lager.push(Mathematik, Biologie, Informatik, Geschichte, Deutsch)
}
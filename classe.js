class Fahrzeug {
    id
    hersteller
    speicher
    HU
    preis
    rabbatcode= 5858
    constructor(id,hersteller, speicher, HU, preis) {
        this.HU = HU
        this.hersteller = hersteller
        this.id= id
        this.speicher = speicher
        this.preis = preis
    }
    pinTest (eingabe){
        if (eingabe === this.rabbatcode){
            console.log("Hey!!")
        }else{
            console.log("OHH")
        }
    }

}
function testFahrzeug() {
    care= new Fahrzeug("hduzhsgJH3322", "BMW", "981", "2024", "60,000,00$")
}
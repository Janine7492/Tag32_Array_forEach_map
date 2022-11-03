let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

function myDrinks() {
    getraenke.sort();
    getraenke.forEach((drink) => { console.log(drink); document.write(drink + "<br />") });
}

myDrinks();


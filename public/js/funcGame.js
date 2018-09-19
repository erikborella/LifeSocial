//comer em casa
$("#ccasab").click(function() {
    if (comida > 0) {
        fome += 15;
        comida--;
        passDay();
    }
})

//comer lixo
$("#lixob").click(function() {
    fome += 5;
    saude -= 5;
    passDay();
})

//fast food
$("#fastfoodb").click(function() {
    if (money >= 10) {
        money -= 10;
        fome += 10;
        saude -= 2;
        passDay();
    }
})

//restaurante
$("#restauranteb").click(function() {
    if (money >= 40) {
        money -= 40
        fome += 17;
        passDay();
    }
})


//chefe
$("#chefb").click(function() {
    if (money >= 100) {
        money -= 100
        fome += 30;
        passDay();
    }
})

//remedio lixo
$("#rlixob").click(function() {
    saude += 5;
    comida -= 5;
    passDay();
})

//remedio casa
$("#rcasab").click(function() {
    if (remedios > 0) {
        saude += 15;
        remedios--;
        passDay();
    }
})

//pronto socoro
$("#prontosocorrob").click(function() {
    if (money >= 10) {
        money -= 10;
        saude += 10;
        fome -= 2;
        passDay();
    }
})

//medico

$("#medicab").click(function() {
    if (money >= 150) {
        saude += 30;
        money -= 150;
        passDay();
    }
})

//hospital

$("#hospitalb").click(function() {
    if (money >= 300) {
        saude += 50;
        money -= 300;
        passDay();
    }
})

$("#garib").click(function() {
    honestidade++;
    money++;
    passDay();
})
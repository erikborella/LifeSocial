
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
});

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

$("#pedreirob").click(function() {
    honestidade++;
    money = Number(money + 2);
    passDay();
})

$("#progb").click(function() {
    honestidade += 2;
    money = Number(money + 10);
    passDay();
})

$("#profb").click(function() {
    honestidade += 2;
    money = Number(money + 15);
    passDay();
})

$("#sociologob").click(function() {
    honestidade += 5;
    money = Number(money + 20);
    passDay();
})

$("#rdinheirob").click(function() {
    honestidade --;
    money = Number(money + 5);
    passDay();
})

$("#rjoiasb").click(function () {
    honestidade -= 5;
    money = Number(money + 15);
    passDay();
})

$("#rdinheirosb").click(function() {
    honestidade -= 7;
    money = Number(money + 30);
    passDay();
})

$("#bancob").click(function() {
    honestidade -= 20;
    money = Number(money + 300);
    passDay();
})

$("#politicob").click(function() {
    honestidade -= 50;
    money = Number(money + 1000);
    passDay();
})

$("#ccomidab").click(function() {
    money -= 7;
    comida++;
    passDay();
})

$("#cremediob").click(function() {
    money -= 7;
    remedios++;
    passDay();
});

$("#quitineteb").click(function() {
    money -= 200;
    passDay();
})

$("#apartamentob").click(function() {
    money -= 20000;
    passDay();
})

$("#casapqb").click(function() {
    money -= 30000;
    passDay();
})

$("#casamdb").click(function() {
    money -= 45000;
    passDay();
})

$("#mansaob").click(function() {
    money -= 60000;
    passDay();
})


$("#antigob").click(function() {
    money -= 2000
    passDay();
})
$("#seminovob").click(function() {
    money -= 10000
    passDay();
})
$("#popularb").click(function() {
    money -= 15000
    passDay();
})
$("#esportivob").click(function() {
    money -= 25000
    passDay();
})

$("#altaclasseb").click(function() {
    money -= 50000
    passDay();
})

$("#livrosb").click(function() {
    money -= 300
    passDay();
})

$("#yoyob").click(function() {
    money -= 500
    passDay();
})
$("#cubob").click(function() {
    money -= 500
    passDay();
})
$("#tvb").click(function() {
    money -= 1500
    passDay();
})
$("#computadorb").click(function() {
    money -= 2500
    passDay();
})
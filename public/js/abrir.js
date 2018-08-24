$("#beg").click(function(){
  esconderTudo();
  $("#titulo").html('Início');
});
$("#esc").click(function(){
  $("#titulo").html('Escola');
  esconderTudo();
});
$("#traba").click(function(){
  $("#titulo").html('Trabalho');
  esconderTudo();
});
$("#merc").click(function(){
  $("#titulo").html('Mercado');
  esconderTudo();
});
$('.button-collapse').sideNav({
  menuWidth: 325,
});


function esconderInicio() {
    $("#inicio").hide();
    
    $("#comida").hide();
    $("#saude").hide();
    
    $("#lixo").hide();
    $("#fastfood").hide();
    $("#hotdog").hide();
    $("#casacomer").hide();
    $("#restaurante").hide();
    $("#chef").hide();

    $("#lixorem").hide();
    $("#casarem").hide();
    $("#apronto").hide();
    $("#clinica").hide();
    $("#medic").hide();
    $("#hospital").hide();
}
function esconderTrabalho() {
    $("#trab").hide();
    
    $("#desonesto").hide();
    $("#honesto").hide();
    
    $("#rdinheiro").hide();
    $("#rjoias").hide();
    $("#rroupas").hide();
    $("#rcelular").hide();
    $("#banco").hide();
    $("#politico").hide();

    $("#caridade").hide();
    $("#pedreiro").hide();
    $("#gari").hide();
    $("#professor").hide();
    $("#programador").hide();
    $("#sociologo").hide();
}
function esconderEscola() {
    $("#school").hide();
    
    $("#faculdade").hide();
    $("#mestrado").hide();
    $("#doutorado").hide();
    
    $("#sociologia").hide();
    
    $("#exclusao").hide();
    $("#filan").hide();
    $("#publicpolitic").hide();
    $("#edusocial").hide();
    $("#ambientesocial").hide();

    $("#phd").hide();
    $("#sociotec").hide();
    $("#cienciassociais").hide();
    $("#socioeco").hide();
    $("#socioind").hide();
}
function esconderMercado() {
    $("#mercado").hide();
    
    $("#supermercado").hide();
    $("#casa").hide();
    $("#carro").hide();
    $("#utencilios").hide();
    
    $("#ccomida").hide();
    $("#cremedio").hide();

    $("#quitinete").hide();
    $("#apartamento").hide();
    $("#casapq").hide();
    $("#casamd").hide();
    $("#casagd").hide();
    $("#mansao").hide();

    $("#antigo").hide();
    $("#seminovo").hide();
    $("#popular").hide();
    $("#esportivo").hide();
    $("#altaclasse").hide();

    $("#mobilia").hide();
    $("#cubo").hide();
    $("#computador").hide();
    $("#livros").hide();
    $("#escrivaninha").hide();
    $("#tv").hide();
}
function esconderGifs(){
  $("#ccomida").hide();
  $("#cremedio").hide();

  $("#quitinete").hide();
  $("#apartamento").hide();
  $("#casapq").hide();
  $("#casamd").hide();
  $("#casagd").hide();
  $("#mansao").hide();

  $("#antigo").hide();
  $("#seminovo").hide();
  $("#popular").hide();
  $("#esportivo").hide();
  $("#altaclasse").hide();

  $("#mobilia").hide();
  $("#cubo").hide();
  $("#computador").hide();
  $("#livros").hide();
  $("#escrivaninha").hide();
  $("#tv").hide();

  $("#sociologia").hide();
    
    $("#exclusao").hide();
    $("#filan").hide();
    $("#publicpolitic").hide();
    $("#edusocial").hide();
    $("#ambientesocial").hide();

    $("#phd").hide();
    $("#sociotec").hide();
    $("#cienciassociais").hide();
    $("#socioeco").hide();
    $("#socioind").hide();

    $("#rdinheiro").hide();
    $("#rjoias").hide();
    $("#rroupas").hide();
    $("#rcelular").hide();
    $("#banco").hide();
    $("#politico").hide();

    $("#caridade").hide();
    $("#pedreiro").hide();
    $("#gari").hide();
    $("#professor").hide();
    $("#programador").hide();
    $("#sociologo").hide();

    $("#lixo").hide();
    $("#fastfood").hide();
    $("#hotdog").hide();
    $("#casacomer").hide();
    $("#restaurante").hide();
    $("#chef").hide();

    $("#lixorem").hide();
    $("#casarem").hide();
    $("#apronto").hide();
    $("#clinica").hide();
    $("#medic").hide();
    $("#hospital").hide();
}
function esconderTudo() {
    esconderInicio();
    esconderTrabalho();
    esconderEscola();
    esconderMercado();
}
$(document).ready(function(){ 
    esconderTudo();
});
$("#iniciob").click(function() {
    esconderTrabalho();
    esconderEscola();
    esconderMercado();
    esconderGifs();
    $("#inicio").show(250);   
  });
$("#trabb").click(function() {
    esconderInicio();
    esconderEscola();
    esconderMercado();
    esconderGifs();
    $("#trab").show(250);   
  });
$("#schoolb").click(function() {
    esconderTrabalho();
    esconderInicio();
    esconderMercado();
    esconderGifs();
    $("#school").show(250);   
  });
$("#mercadob").click(function() {
    esconderTrabalho();
    esconderEscola();
    esconderInicio();
    esconderGifs();
    $("#mercado").show(250);   
  });
$("#comidab").click(function() {
    esconderTrabalho();
    esconderEscola();
    esconderMercado();
    esconderGifs();
    $("#saude").hide();
    $("#comida").show(250);   
  });
$("#saudeb").click(function() {
    esconderTrabalho();
    esconderEscola();
    esconderMercado();
    esconderGifs();
    $("#comida").hide();
    $("#saude").show(250);   
  });
  $("#honestob").click(function() {
    esconderInicio();
    esconderEscola();
    esconderMercado();
    esconderGifs();
    $("#desonesto").hide();
    $("#honesto").show(250);   
  });
$("#desonestob").click(function() {
    esconderInicio();
    esconderEscola();
    esconderMercado();
    esconderGifs();
    $("#honesto").hide();
    $("#desonesto").show(250);   
  });
$("#lixob").click(function() {
    $("#hotdog").hide(); 
    $("#fastfood").hide();
    $("#casacomer").hide();
    $("#restaurante").hide();  
    $("#chef").hide(); 
    $("#lixo").show(250); 
  });
$("#fastfoodb").click(function() {  
    $("#hotdog").hide(); 
    $("#lixo").hide();   
    $("#casacomer").hide();
    $("#restaurante").hide(); 
    $("#chef").hide();  
    $("#fastfood").show(250);    
  });
$("#hotdogb").click(function() {
    $("#lixo").hide(); 
    $("#casacomer").hide();
    $("#fastfood").hide();
    $("#restaurante").hide();
    $("#chef").hide();   
    $("#hotdog").show(250);   
  });
$("#ccasab").click(function() {
    $("#hotdog").hide(); 
    $("#lixo").hide(); 
    $("#fastfood").hide();
    $("#restaurante").hide(); 
    $("#chef").hide();  
    $("#casacomer").show(250);   
  });
$("#restauranteb").click(function() {
    $("#hotdog").hide(); 
    $("#lixo").hide(); 
    $("#casacomer").hide();
    $("#fastfood").hide();
    $("#chef").hide(); 
    $("#restaurante").show(250);   
  });
$("#chefb").click(function() {
    $("#hotdog").hide(); 
    $("#lixo").hide(); 
    $("#casacomer").hide();
    $("#fastfood").hide();
    $("#restaurante").hide(); 
    $("#chef").show(250);   
  });
$("#rlixob").click(function() {
    $("#casarem").hide(); 
    $("#apronto").hide(); 
    $("#clinica").hide();
    $("#medic").hide();
    $("#hospital").hide(); 
    $("#lixorem").show(250);   
  });
$("#rcasab").click(function() {
    $("#lixorem").hide(); 
    $("#apronto").hide(); 
    $("#clinica").hide();
    $("#medic").hide();
    $("#hospital").hide(); 
    $("#casarem").show(250);   
  });
$("#prontosocorrob").click(function() {
    $("#casarem").hide(); 
    $("#lixorem").hide(); 
    $("#clinica").hide();
    $("#medic").hide();
    $("#hospital").hide(); 
    $("#apronto").show(250);   
  });
$("#clinicab").click(function() {
    $("#lixorem").hide(); 
    $("#apronto").hide(); 
    $("#casarem").hide();
    $("#medic").hide();
    $("#hospital").hide(); 
    $("#clinica").show(250);   
  });
$("#medicab").click(function() {
    $("#lixorem").hide(); 
    $("#apronto").hide(); 
    $("#clinica").hide();
    $("#casarem").hide();
    $("#hospital").hide(); 
    $("#medic").show(250);   
  });
$("#hospitalb").click(function() {
    $("#lixorem").hide(); 
    $("#apronto").hide(); 
    $("#clinica").hide();
    $("#medic").hide();
    $("#casarem").hide(); 
    $("#hospital").show(250);   
  });
$("#rdinheirob").click(function() {
    $("#rjoias").hide(); 
    $("#rroupas").hide(); 
    $("#rcelular").hide();
    $("#banco").hide();
    $("#politico").hide(); 
    $("#rdinheiro").show(250);   
  });
$("#rjoiasb").click(function() {
    $("#rdinheiro").hide(); 
    $("#rroupas").hide(); 
    $("#rcelular").hide();
    $("#banco").hide();
    $("#politico").hide(); 
    $("#rjoias").show(250);   
  });
$("#rroupasb").click(function() {
    $("#rjoias").hide(); 
    $("#rdinheiros").hide(); 
    $("#rcelular").hide();
    $("#banco").hide();
    $("#politico").hide(); 
    $("#rroupas").show(250);   
  });
$("#rcelularb").click(function() {
    $("#rjoias").hide(); 
    $("#rdinheiros").hide(); 
    $("#rroupas").hide();
    $("#banco").hide();
    $("#politico").hide(); 
    $("#rcelular").show(250);   
});
$("#bancob").click(function() {
    $("#rjoias").hide(); 
    $("#rdinheiros").hide(); 
    $("#rroupas").hide();
    $("#rcelular").hide();
    $("#politico").hide(); 
    $("#banco").show(250);   
});
$("#politicob").click(function() {
    $("#rjoias").hide(); 
    $("#rdinheiros").hide(); 
    $("#rroupas").hide();
    $("#rcelular").hide();
    $("#banco").hide(); 
    $("#politico").show(250);   
});
$("#caridadeb").click(function() {
  $("#pedreiro").hide();
  $("#gari").hide();
  $("#professor").hide();
  $("#programador").hide();
  $("#sociologo").hide();
  $("#caridade").show(250);
}); 
$("#pedreirob").click(function() {
  $("#caridade").hide();
  $("#gari").hide();
  $("#professor").hide();
  $("#programador").hide();
  $("#sociologo").hide();
  $("#pedreiro").show(250);
});
$("#garib").click(function() {
  $("#caridade").hide();
  $("#pedreiro").hide();
  $("#professor").hide();
  $("#programador").hide();
  $("#sociologo").hide();
  $("#gari").show(250);
});
$("#profb").click(function() {
  $("#caridade").hide();
  $("#pedreiro").hide();
  $("#gari").hide();
  $("#programador").hide();
  $("#sociologo").hide();
  $("#professor").show(250);
});
$("#progb").click(function() {
  $("#caridade").hide();
  $("#pedreiro").hide();
  $("#gari").hide();
  $("#professor").hide();
  $("#sociologo").hide();
  $("#programador").show(250);
});
$("#sociologob").click(function() {
  $("#caridade").hide();
  $("#pedreiro").hide();
  $("#gari").hide();
  $("#programador").hide();
  $("#professor").hide();
  $("#sociologo").show(250);
});
